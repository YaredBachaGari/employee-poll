import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PollViewerPage from "./Pages/PollViewerPage/PollViewerPage";
import NewPollPage from "./Pages/NewPollPage/NewPollPage";
import VoteResultPage from "./Pages/ResultPage/VoteResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions/:questionId" element={<PollViewerPage />} />
        <Route path="/result/:questionId" element={<VoteResultPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<NewPollPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
