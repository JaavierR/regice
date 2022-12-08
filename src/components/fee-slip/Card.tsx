function Card({ amount }: { amount: string }) {
  return (
    <li className="rounded-2xl border border-obsidian-800 bg-obsidian-800/20 p-6 backdrop-blur-md">
      <span className="block overflow-hidden overflow-ellipsis whitespace-nowrap font-medium text-obsidian-50">
        Valor Liquido {amount}
      </span>
      <div></div>

      <div className="flex justify-between">
        <div>
          Recibes:{" "}
          <span id="get" className="text-green-400">
            $0
          </span>
        </div>

        <div>
          SII:{" "}
          <span id="sii" className="text-red-400">
            $0
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
