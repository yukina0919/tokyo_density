import Map from "./components/vis/map2";
import mapData from "./assets/tokyo_lover.geo.json";
import populationData from "./assets/csvData/tokyo_density1.json";

export default function App() {
  return <Map mapData={mapData} populationData={populationData} />;
}
