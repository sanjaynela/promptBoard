export function formatCategory(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function splitTags(value: string) {
  return value
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);
}
