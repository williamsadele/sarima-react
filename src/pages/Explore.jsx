import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown, ListFilter } from "lucide-react";
import Navbar from "../components/Navbar";
import ShotCard from "../components/ShotCard";
import { ExploreFooter } from "../components/Footer";
import { designs, categories } from "../data/designs";
 
export default function Explore() {
  const [params, setParams] = useSearchParams();
  const search = params.get("q") || "";
  const [activeTag, setActiveTag] = useState(null);
 
  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return designs.filter(
      (d) =>
        (!activeTag || d.category === activeTag) &&
        (!q || d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q))
    );
  }, [search, activeTag]);
 
  return (
    <>
      <Navbar variant="explore" search={search} onSearch={(v) => setParams(v ? { q: v } : {})} />
 
      <div className="filters">
        <div className="filter-left">
          <div className="dropdown">
            <button className="dropdown-btn">Popular <ChevronDown /></button>
          </div>
          {categories.map((c) => (
            <a
              key={c}
              href="#"
              className={`filter-tag ${activeTag === c ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); setActiveTag(activeTag === c ? null : c); }}
            >
              {c}
            </a>
          ))}
        </div>
        <div className="filter-right">
          <button className="filter-btn" onClick={() => { setActiveTag(null); setParams({}); }}>
            Clear <ListFilter />
          </button>
        </div>
      </div>
 
      <section className="design-grid">
        {visible.map((d) => <ShotCard key={d.id} design={d} />)}
        {visible.length === 0 && <p>No designs found. Try another search or category.</p>}
      </section>
 
      <ExploreFooter />
    </>
  );
}