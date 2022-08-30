export function PcIcon({
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
            ? "fill-violet-400/20 stroke-violet-500"
            : "stroke-zinc-400 dark:stroke-zinc-500"
        }
      />
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          selected
            ? "stroke-violet-500"
            : "stroke-zinc-400 dark:stroke-zinc-500"
        }
      />
    </svg>
  );
}
