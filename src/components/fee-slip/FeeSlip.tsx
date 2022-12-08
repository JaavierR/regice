import { ChangeEvent, KeyboardEvent, useState } from "react";
import Card from "./Card";
import { asClpCurency, revertClpCurency } from "./helpers";

const options = ["liquido", "bruto"];

function FeeSlip() {
  const [amount, setAmount] = useState({ original: 0, mask: "$0" });

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pureValue = revertClpCurency(value) || 0;
    setAmount({ original: pureValue, mask: asClpCurency(pureValue) });
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
