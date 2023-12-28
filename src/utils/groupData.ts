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

const groupData = (data: WineDataPoint[]) => {

    const groupedData: Record<number, { data: WineDataPoint[]; flavArr: (number | string)[]; gammaArr: (number | undefined) [] }> = {};

    for (const entry of data) {
      const alcoholClass = entry.Alcohol;

      if (!groupedData[alcoholClass]) {
        groupedData[alcoholClass] = { data: [], flavArr: [], gammaArr: [] };
      }

      groupedData[alcoholClass].data.push(entry);
      groupedData[alcoholClass].flavArr.push(entry.Flavanoids);
      groupedData[alcoholClass].gammaArr.push(entry.Gamma);
    }

    return groupedData;

};

export default groupData;