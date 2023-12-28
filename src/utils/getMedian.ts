export const getMedian = (data: number[]) => {
  const sortedValues = [...data].sort((a, b) => (a as number) - (b as number));
  const middleIndex = Math.floor(sortedValues.length / 2);
  const median =
    sortedValues.length % 2 === 0
      ? ((sortedValues[middleIndex - 1] as number) +
          (sortedValues[middleIndex] as number)) /
        2
      : sortedValues[middleIndex];

  return median;
};
