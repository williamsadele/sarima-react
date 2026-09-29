import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Bookmark } from "lucide-react";
 
export default function ShotCard({ design }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
 
  return (
    <div className="design-card">
      <div className="card-image">
        <Link to={`/shots/${design.id}`}>
          <img src={design.image} alt={design.title} loading="lazy" />
        </Link>
        <div className="card-actions">
          <button type="button" className="card-action" aria-label="Like" onClick={() => setLiked(!liked)}>
            <Heart fill={liked ? "currentColor" : "none"} />
          </button>
          <button type="button" className="card-action" aria-label="Save" onClick={() => setSaved(!saved)}>
            <Bookmark fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
      <Link to={`/shots/${design.id}`} className="card-title-link">
        <p className="card-title">{design.title}</p>
      </Link>
    </div>
  );
}