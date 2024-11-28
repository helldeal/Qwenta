import { Routes, Route, HashRouter } from "react-router";
import OnBoarding from "./routes/OnBoarding";
import Dashboard from "./routes/Dashboard";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}
