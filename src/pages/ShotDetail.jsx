import { useParams, Link } from "react-router-dom";
import { Heart, Bookmark, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { ExploreFooter } from "../components/Footer";
import { designs } from "../data/designs";
 
export default function ShotDetail() {
  const { id } = useParams();
  const design = designs.find((d) => String(d.id) === id);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
 
  if (!design) {
    return (
      <>
        <Navbar variant="explore" />
        <div style={{ padding: "60px 40px" }}>
          <p>Shot not found.</p>
          <Link to="/explore">← Back to Explore</Link>
        </div>
        <ExploreFooter />
      </>
    );
  }
 
  return (
    <>
      <Navbar variant="explore" />
 
      <div className="shot-detail">
        <Link to="/explore" className="shot-back"><ArrowLeft size={18} /> Back to Explore</Link>
 
        <div className="shot-detail-layout">
          <img src={design.image} alt={design.title} className="shot-detail-image" />
 
          <div className="shot-detail-info">
            <h1>{design.title}</h1>
            <p className="shot-detail-category">{design.category}</p>
 
            <div className="shot-detail-actions">
              <button onClick={() => setLiked(!liked)} className="card-action">
                <Heart fill={liked ? "currentColor" : "none"} /> {liked ? "Liked" : "Like"}
              </button>
              <button onClick={() => setSaved(!saved)} className="card-action">
                <Bookmark fill={saved ? "currentColor" : "none"} /> {saved ? "Saved" : "Save"}
              </button>
            </div>
 
            <a href="#" className="startpro" style={{ display: "inline-block", marginTop: "20px" }}>
              Hire this designer
            </a>
          </div>
        </div>
      </div>
 
      <ExploreFooter />
    </>
  );
}