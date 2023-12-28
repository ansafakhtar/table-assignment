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

interface GammaDataPoint {
    [key: number]: {
        mean: number; 
        median: number; 
        mode: string[];
    }
}

const useGammaStats = (initialData: WineDataPoint[]) => {

  const [gammaData, setGammaData] = useState<GammaDataPoint>()
  const gammaStats: { [key: number]: { mean: number; median: number; mode: string[] } } = {};

  useEffect(() => {
    const groupedData = groupData(initialData);
    
    Object.values(groupedData).forEach((e,index) => {  
      const mean = getMean(e.gammaArr as number[]);
      const median = getMedian(e.gammaArr as number[]);
      const mode = getMode(e.gammaArr as number[]);
  
      gammaStats[index+1] = { mean, median, mode };
    })

    setGammaData(gammaStats);

  }, [initialData]);

  return { gammaData };
};

export default useGammaStats;