export function cn(...vals: Array<string | false | undefined | null>) {
  return vals.filter(Boolean).join(" ");
}
