import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PollViewerPage from "./Pages/PollViewerPage/PollViewerPage";
import NewPollPage from "./Pages/NewPollPage/NewPollPage";
import HOC from "./Components/HigherOrderComp/HOC";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/questions/:questionId"
          element={
            <RequireAuth>
              <PollViewerPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/leaderboard"
          element={
            <RequireAuth>
              <Leaderboard />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/add"
          element={
            <RequireAuth>
              <NewPollPage />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/*"
          element={
            <RequireAuth>
              <NotFound />
            </RequireAuth>
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default HOC(App);
