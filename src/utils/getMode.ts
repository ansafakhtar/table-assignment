export const getMode = (data: number[]) => {
  const occurrences: { [key: number]: number } = {};

  data.forEach((value) => {
    occurrences[value as number] = (occurrences[value as number] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(occurrences));
  const mode: string[] = Object.keys(occurrences).filter(
    (key) => occurrences[parseFloat(key)] === maxCount
  );

  if (mode.length === data.length) {
    mode.length = 0;
    mode.push("NA");
  }

  return mode;
};
