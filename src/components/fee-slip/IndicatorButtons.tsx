export default function IndicatorButtons({ indicator }: { indicator: string }) {
  return (
    <span className="isolate inline-flex rounded-2xl shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-2xl border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "clp"}
      >
        CLP
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium  hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "uf"}
      >
        UF
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-2xl border border-obsidian-800 bg-obsidian-800/30 px-4 py-2 text-sm font-medium hover:bg-obsidian-50 hover:text-obsidian-800 focus:z-10 focus:border-obsidian-300 focus:outline-none focus:ring-1 focus:ring-obsidian-300 data-[active=true]:bg-obsidian-50 data-[active=true]:text-obsidian-800"
        data-active={indicator === "usd"}
      >
        USD
      </button>
    </span>
  );
}
