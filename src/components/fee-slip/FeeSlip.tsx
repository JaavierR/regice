import { ChangeEvent, KeyboardEvent, useState } from "react";
import Card from "./Card";
import { createMask, deleteMask } from "./helpers";
import IndicatorButtons from "./IndicatorButtons";

const options = ["liquido", "bruto"];

let indicators = {
  usd: 884.74,
  uf: 34858.13,
  clp: 1,
};

function FeeSlip() {
  const [amount, setAmount] = useState({ original: "0", computed: 0 });
  const [indicator, setIndicator] = useState<keyof typeof indicators>("clp");

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const cleanValue = parseFloat(value.replace(/[^0-9,\.]/g, ""));
    const computedValue = cleanValue * indicators[indicator];

    setAmount({ original: value, computed: computedValue });
  }

  function changeIndicator(indicator: keyof typeof indicators) {
    setIndicator(indicator);
    setAmount({ original: "0", computed: 0 });
  }

  return (
    <>
      <div className="flex w-full justify-end">
        <IndicatorButtons
          indicator={indicator}
          changeIndicator={changeIndicator}
        />
      </div>

      <input
        type="text"
        className="mt-6 block w-full rounded-2xl border-obsidian-800 bg-obsidian-800/20 shadow-sm focus:border-obsidian-300 focus:ring-obsidian-300 focus:ring-offset-obsidian-900 sm:text-sm"
        value={amount.original}
        onChange={handleAmountChange}
        pattern="[0-9]+([,\.][0-9]+)?"
      />

      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {options.map((opt, index) => (
          <Card
            key={index}
            title={opt}
            amount={amount.computed}
            percentage={1 - 0.1225}
          />
        ))}
      </ul>
    </>
  );
}
export default FeeSlip;
