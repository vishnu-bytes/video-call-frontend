export const textEllipsis = (text, size) => {
  text = String(text);
  if (text.length > size) return text.substring(0, size) + "...";
  return text;
};
