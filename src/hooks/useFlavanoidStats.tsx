import { useEffect, useState } from 'react';
import { getMean } from '../utils/getMean';
import { getMedian } from '../utils/getMedian';
import { getMode } from '../utils/getMode';
import groupData from '../utils/groupData';

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
  Gamma?: number;
}

interface FlavDataPoint {
    [key: number]: {
    mean: number; 
    median: number; 
    mode: string[];
    }
}

const useFlavanoidStats = (initialData: WineDataPoint[]) => {
  const [flavanoidData, setFlavanoidData] = useState<FlavDataPoint>({});
  const flavanoidStats: {
    [key: number]: { mean: number; median: number; mode: string[] };
  } = {};

  const calculation = () => {
    const groupedData = groupData(initialData);

    Object.values(groupedData).forEach((e, index) => {

      // Convert values to numbers if they are strings
      const flavanoidsNumericValues = e.flavArr.map((value) => typeof value === "string" ? parseFloat(value) : value);

      const mean = getMean(flavanoidsNumericValues);
      const median = getMedian(flavanoidsNumericValues);
      const mode = getMode(flavanoidsNumericValues);

      flavanoidStats[index + 1] = { mean, median, mode };
    });

    setFlavanoidData(flavanoidStats);
  };

  useEffect(() => {
    calculation();
  }, []);

  return { flavanoidData };
};

export default useFlavanoidStats;