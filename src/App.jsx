import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ShotDetail from "./pages/ShotDetail";
import ComponentLibrary from "./pages/ComponentLibrary";
 
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<ComponentLibrary />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/shots/:id" element={<ShotDetail />} />
    </Routes>
  );
}
 