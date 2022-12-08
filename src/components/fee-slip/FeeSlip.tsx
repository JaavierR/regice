import { ChangeEvent, KeyboardEvent, useState } from "react";
import Card from "./Card";

function asClpCurency(value: number) {
  const valueGuard = value || 0;
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(valueGuard);
}

function revertClpCurency(value: string) {
  return parseInt(value.replace(/[^\d]/g, ""));
}

function FeeSlip() {
  const [amount, setAmount] = useState("$0");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const pureValue = revertClpCurency(value);
    setAmount(asClpCurency(pureValue));
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
        value={amount}
        onChange={handleAmountChange}
        onKeyDown={handleKeyDown}
      />

      <ul className="mt-6 grid grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index} amount={amount} />
        ))}
      </ul>
    </>
  );
}
export default FeeSlip;
