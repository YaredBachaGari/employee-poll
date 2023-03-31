import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
