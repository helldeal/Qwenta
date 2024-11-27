import { BrowserRouter, Routes, Route } from "react-router";
import OnBoarding from "./routes/OnBoarding";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/Dashboard" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
}
