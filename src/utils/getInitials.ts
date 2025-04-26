export function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
}
