import wineData from "./assets/Wine-Data.json";
import './App.css';
import useCalculateGamma from './hooks/useCalculateGamma';
import useFlavanoidStats from './hooks/useFlavanoidStats';
import Table from './components/Table';
import useGammaStats from './hooks/useGammaStats';


function App() {

  const  {GammaData}  = useCalculateGamma(wineData);
  const flavanoidStats = useFlavanoidStats(GammaData);
  const gammaStats = useGammaStats(GammaData);

  return (
    <div className="App">
      <div className="container">
      <Table
        classList={Object.keys(flavanoidStats.flavanoidData).map(key => `Class ${key}`)}
        data={flavanoidStats.flavanoidData}
        rowTitles={["Flavanoids Mean","Flavanoids Median", "Flavanoids Mode"]}
      />
      
      {gammaStats.gammaData ? 
        <Table
        classList={Object.keys(gammaStats.gammaData as object).map(key => `Class ${key}`)}
        data={gammaStats.gammaData as object}
        rowTitles={["Gamma Mean","Gamma Median", "Gamma Mode"]}
      />
      : <></>}
      </div>
    </div>
  );
}

export default App;
