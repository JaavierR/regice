import { createMask } from "./helpers";

function Clipboard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
      />
    </svg>
  );
}

function Card({
  title,
  amount,
  percentage,
}: {
  title: string;
  amount: number;
  percentage: number;
}) {
  const original = title === "liquido" ? amount / percentage : amount;
  const payment = title === "liquido" ? amount : amount * percentage;
  const fee = Math.abs(original - payment);

  async function copyToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        Math.round(original).toString()
      );
    }
  }

  return (
    <li className="rounded-2xl border border-obsidian-800 bg-obsidian-800/20 p-6 backdrop-blur-md">
      <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium text-obsidian-50">
        Valor {title}
      </span>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col space-y-1">
          <span>La boleta debe ser por</span>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">
              {createMask({ value: original })}
            </span>

            <button className="" type="button" onClick={copyToClipboard}>
              <Clipboard />
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-sm">
          <span>Recibes un pago de</span>
          <span id="get" className="text-green-400">
            {createMask({ value: payment })}
          </span>
        </div>

        <div className="flex flex-col space-y-1 text-sm">
          <span> Retenci&oacute;n SII</span>
          <span id="sii" className="text-red-400">
            {createMask({ value: fee })}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
