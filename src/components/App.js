import { useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage />
      <h1>Plantsy</h1>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList
        plants={plants}
        setPlants={setPlants}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
