import { useState, useEffect } from 'react';

interface WineDataPoint {
  Alcohol: number;
  'Malic Acid': number;
  Ash: number | string;
  'Alcalinity of ash': number;
  Magnesium: number;
  'Total phenols': number;
  Flavanoids: number | string;
  'Nonflavanoid phenols': number | string;
  Proanthocyanins: string;
  'Color intensity': number | string;
  Hue: number;
  'OD280/OD315 of diluted wines': number | string;
  Unknown: number;
  Gamma?: number; // New property to be added
}

const useCalculateGamma = (initialData: WineDataPoint[]) => {

  const [GammaData, setGammaData] = useState<WineDataPoint[]>(initialData);

  useEffect(() => {
    const updatedData = GammaData.map((dataPoint) => {
      const { Ash, Hue, Magnesium } = dataPoint;
      
      // Convert Ash to number if it's a string
      const ashValue = typeof Ash === 'string' ? parseFloat(Ash) : Ash;

      const gamma = parseFloat(((ashValue * Hue) / Magnesium).toFixed(3));
      return { ...dataPoint, Gamma: gamma };
    });

    setGammaData(updatedData);
  }, []);

  return { GammaData };
};

export default useCalculateGamma;