import "./App.css";
import Grid from "./components/Grid";
import { Routes, Route } from "react-router-dom";
import { useStatevalue } from "./context/store";
import Form from "./components/Form";
function App() {
  const { apiUrl, columnDef } = useStatevalue();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/grid"
          element={<Grid apiUrl={apiUrl} columnDef={columnDef} />}
        />
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
