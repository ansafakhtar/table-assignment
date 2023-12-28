export const getMean = (data: number[]) => {
  const mean = data.reduce((sum, value) => sum + value, 0) / data.length;

  return mean;
};
