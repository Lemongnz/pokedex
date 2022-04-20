import "./App.css";
import PokeGrid from "./components/poke-grid/poke-grid";
import PokeHeader from "./components/poke-header/poke-header";

function App() {
  return (
    <div className="App">
      <PokeHeader></PokeHeader>
      <PokeGrid></PokeGrid>
    </div>
  );
}

export default App;
