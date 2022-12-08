export function asClpCurency(value: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(value);
}

export function revertClpCurency(value: string) {
  return parseInt(value.replace(/[^\d]/g, ""));
}
