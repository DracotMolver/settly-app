export function getId(label) {
  let id = "";

  if (label) {
    id = label.toLowerCase().replace(/\s+/g, "-");
  }

  return id;
}
