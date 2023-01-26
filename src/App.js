import "./App.css";
import Grid from "./components/Grid";
import { useStatevalue } from "./context/store";

function App() {
  const {apiUrl, columnDef}=useStatevalue()
  return (
    <div className="App">
      <Grid apiUrl={apiUrl} columnDef={columnDef}/>
    </div>
  );
}

export default App;
