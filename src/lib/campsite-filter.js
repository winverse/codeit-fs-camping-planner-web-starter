export function toPetFilter(value) {
  if (typeof value !== "string") {
    return undefined;
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return undefined;
}
