import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonIcon,
  },
  {
    value: "system",
    label: "System",
    icon: PcIcon,
  },
];

function MoonIcon({
  selected,
  ...props
}: {
  selected?: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className={selected ? "fill-magenta-400/20" : "fill-transparent"}
      />
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className={selected ? "fill-magenta-500" : "fill-zinc-400"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className={selected ? "fill-magenta-500" : "fill-zinc-400"}
      />
    </svg>
  );
}

function PcIcon({
  selected,
  ...props
}: {
  selected?: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className={
          selected
            ? "fill-magenta-400/20 stroke-magenta-500"
            : "stroke-zinc-400"
        }
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={selected ? "stroke-magenta-500" : "stroke-zinc-400"}
      />
    </svg>
  );
}

function SunIcon({
  selected,
  ...props
}: {
  selected?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className={
          selected
            ? "fill-magenta-400/20 stroke-magenta-500"
            : "stroke-zinc-400"
        }
      />
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className={selected ? "stroke-magenta-500" : "stroke-zinc-400"}
      />
    </svg>
  );
}

export function ThemeToggle({ panelClassName = "mt-4" }) {
  let [selectedTheme, setSelectedTheme] = useState<string | undefined>();

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    } else {
      const filteredTheme = themes.find(
        (theme) =>
          theme.value === document.documentElement.getAttribute("data-theme")
      );
      setSelectedTheme(filteredTheme?.value);
    }
  }, [selectedTheme]);

  return (
    <Listbox value={selectedTheme} onChange={setSelectedTheme}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button
        type="button"
        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-inset dark:ring-white/5"
      >
        <span className="dark:hidden">
          <SunIcon className="h-5 w-5" selected={selectedTheme !== "system"} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="h-5 w-5" selected={selectedTheme !== "system"} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          "absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-zinc-700 shadow-lg ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-0 dark:highlight-white/5",
          panelClassName
        )}
      >
        {themes.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "flex cursor-pointer items-center py-1 px-2",
                  selected && "text-magenta-500",
                  active && "bg-zinc-50 dark:bg-zinc-600/30"
                )}
              >
                <Icon selected={selected} className="mr-4 h-6 w-6" />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
