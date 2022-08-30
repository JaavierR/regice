import { useTheme } from "@/hooks/useTheme";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { MoonIcon } from "./MoonIcon";
import { PcIcon } from "./PcIcon";
import { SunIcon } from "./SunIcon";

let settings = [
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

export function ThemeToggle({ panelClassName = "mt-4" }) {
  let { setting, setSetting } = useTheme();

  return (
    <Listbox value={setting} onChange={setSetting}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-zinc-700 dark:ring-inset dark:ring-white/5"
      >
        <span className="dark:hidden">
          <SunIcon className="h-5 w-5" selected={setting !== "system"} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="h-5 w-5" selected={setting !== "system"} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          "absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-zinc-700 shadow-lg ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-0 dark:highlight-white/5",
          panelClassName
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "flex cursor-pointer items-center py-1 px-2",
                  selected && "text-cyan-500",
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

export default ThemeToggle;
