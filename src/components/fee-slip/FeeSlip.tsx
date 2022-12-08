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
  const [amount, setAmount] = useState({ original: 0, mask: "0" });
  const [indicator, setIndicator] = useState<keyof typeof indicators>("clp");

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const unMaskValue = deleteMask(value) || 0;
    const original = unMaskValue * indicators[indicator];
    const mask = createMask({ value: unMaskValue, indicator });

    setAmount({ original, mask });
  }

  function changeIndicator(indicator: keyof typeof indicators) {
    setIndicator(indicator);
    setAmount({ original: 0, mask: "0" });
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
        value={amount.mask}
        onChange={handleAmountChange}
        pattern="[0-9\/]*"
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
