import { Route, Routes } from "react-router-dom";
import "./App.css";
// import GameState from "./components/GameState";
import Layout from "./components/Layout";
import Home from "./pages/Home";
{
  /* {" "}
<GameState /> */
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
