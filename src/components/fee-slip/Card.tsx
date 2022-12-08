import { createMask } from "./helpers";

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

  return (
    <li className="rounded-2xl border border-obsidian-800 bg-obsidian-800/20 p-6 backdrop-blur-md">
      <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium text-obsidian-50">
        Valor {title}
      </span>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col space-y-1">
          <span>La boleta debe ser por</span>
          <span className="font-semibold text-white">
            {createMask({ value: original })}
          </span>
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
