import NavBar from "./Components/NavBar";
import Index from "./Components/Index";
import Details from "./Components/Details";
import Edit from "./Components/Edit";
import New from "./Components/New";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
}

export default App;