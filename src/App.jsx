import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ShotDetail from "./pages/ShotDetail";
 
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/shots/:id" element={<ShotDetail />} />
    </Routes>
  );
}
 