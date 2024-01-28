export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert(`code copied`);
};
