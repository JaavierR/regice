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
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon className="w-6 h-6" selected={setting !== "system"} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="w-6 h-6" selected={setting !== "system"} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          "absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-zinc-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-zinc-700 font-semibold dark:bg-zinc-800 dark:ring-0 dark:highlight-white/5 dark:text-zinc-300",
          panelClassName
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "py-1 px-2 flex items-center cursor-pointer",
                  selected && "text-violet-500",
                  active && "bg-zinc-50 dark:bg-zinc-600/30"
                )}
              >
                <Icon selected={selected} className="w-6 h-6 mr-2" />
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
