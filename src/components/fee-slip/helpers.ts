export function createMask({
  value,
  indicator = "clp",
}: {
  value: number;
  indicator?: string;
}) {
  if (indicator === "uf") {
    return value.toString();
  }

  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: indicator,
    maximumFractionDigits: 0,
  }).format(value);
}

export function deleteMask(value: string) {
  return parseInt(value.replace(/[^\d]/g, ""));
}
