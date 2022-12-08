import { ChangeEvent, KeyboardEvent, useState } from "react";
import Card from "./Card";
import { createMask, deleteMask } from "./helpers";

const options = ["liquido", "bruto"];

let indicators = {
  usd: 884.74,
  uf: 34858.13,
  clp: 1,
};

function FeeSlip() {
  const [amount, setAmount] = useState({ original: 0, mask: "$0" });
  const [indicator, setIndicator] = useState<keyof typeof indicators>("usd");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const unMaskValue = deleteMask(value) || 0;
    const original = unMaskValue * indicators[indicator];
    const mask = createMask({ value: unMaskValue, indicator });

    setAmount({ original, mask });
  };

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const isNumberOrBackspace = /[0-9]/.test(e.key) || e.key === "Backspace";

    if (!isNumberOrBackspace) {
      e.preventDefault();
      return false;
    }

    return true;
  }

  return (
    <>
      <input
        type="text"
        className="block w-full rounded-2xl border-obsidian-800 bg-obsidian-800/20 shadow-sm focus:border-obsidian-300 focus:ring-obsidian-300 focus:ring-offset-obsidian-900 sm:text-sm"
        value={amount.mask}
        onChange={handleAmountChange}
        onKeyDown={handleKeyDown}
      />

      <ul className="mt-6 grid grid-cols-2 gap-6">
        {options.map((opt, index) => (
          <Card
            key={index}
            title={opt}
            amount={amount.original}
            percentage={1 - 0.1225}
          />
        ))}
      </ul>
    </>
  );
}
export default FeeSlip;
