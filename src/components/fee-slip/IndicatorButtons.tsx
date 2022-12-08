import type { MouseEvent } from "react";

export default function IndicatorButtons({
  indicator,
  changeIndicator,
}: {
  indicator: string;
  changeIndicator: (indicator: "usd" | "uf" | "clp") => void;
}) {
  const onClick = (e: MouseEvent<HTMLButtonElement>) =>
    changeIndicator(
      e.currentTarget.getAttribute("data-indicator") as "usd" | "uf" | "clp"
    );

  return (
    <span className="isolate inline-flex rounded-2xl shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-2xl border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "clp"}
        data-indicator="clp"
        onClick={onClick}
      >
        CLP
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium  hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "uf"}
        data-indicator="uf"
        onClick={onClick}
      >
        UF
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-2xl border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "usd"}
        data-indicator="usd"
        onClick={onClick}
      >
        USD
      </button>
    </span>
  );
}
