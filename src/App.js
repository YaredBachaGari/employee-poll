import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PollViewerPage from "./Pages/PollViewerPage/PollViewerPage";
import NewPollPage from "./Pages/NewPollPage/NewPollPage";
import HOC from "./Components/HigherOrderComp/HOC";
import { useSelector } from "react-redux";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const { loggedInUser } = useSelector((state) => state.AuthUser);
  return (
    <BrowserRouter>
      <Routes>
        {loggedInUser?.id ? (
          <>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/questions/:questionId" element={<PollViewerPage />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/add" element={<NewPollPage />} />
          </>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/questions/:questionId" element={<Navigate to="/" />} />
        <Route path="/leaderboard" element={<Navigate to="/" />} />
        <Route path="/add" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default HOC(App);
