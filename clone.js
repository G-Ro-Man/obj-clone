const types = [
  "string",
  "number",
  "undefined",
  "boolean",
  "symbol",
  "function",
];

export default function clone(obj) {
  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (types.includes(typeof value) || value === null) {
      newObj[key] = value;
    } else if (Array.isArray(value)) {
      newObj[key] = value.map((el) => el);
    } else if (typeof value === "object") {
      newObj[key] = clone(value);
    }
  }

  return newObj;
}
