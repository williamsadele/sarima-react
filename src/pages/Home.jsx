import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Upload, WandSparkles, Rocket, CircleCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import { HomeFooter } from "../components/Footer";
import { steps, plans } from "../data/designs";
 
const stepIcons = { upload: <Upload />, wand: <WandSparkles />, rocket: <Rocket /> };
const popular = ["dashboard", "landing page", "e-commerce", "logo"];
 
export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
 
  const goSearch = (q) => navigate(q ? `/explore?q=${encodeURIComponent(q)}` : "/explore");
 
  return (
    <>
      <Navbar />
 
      <div className="hero">
        <div className="hero-left">
          <h1>Discover the World's Top Designers</h1>
          <p>Explore work from the most talented and accomplished designers ready to take on your next project.</p>
          <div className="hbottom">
            <div className="tabs">
              <div className="bttt"><span className="material-symbols-outlined">imagesmode</span><Link to="/explore">Shots</Link></div>
              <div className="bttt"><span className="material-symbols-outlined">person</span><a href="#">Designers</a></div>
              <div className="bttt"><span className="material-symbols-outlined">notes</span><a href="#">Services</a></div>
            </div>
 
            <form className="search-bar" onSubmit={(e) => { e.preventDefault(); goSearch(query); }}>
              <input
                type="text"
                placeholder="What's your design need?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" style={{ all: "unset", cursor: "pointer" }} aria-label="Search">
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>
 
            <div className="popular">
              <span>Popular:</span>
              {popular.map((p) => (
                <a key={p} href="#" onClick={(e) => { e.preventDefault(); goSearch(p); }}>{p}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="phone-mockup"></div>
      </div>
 
      <div className="footer-banner">
        <a href="#"><Sparkles />Start a Project Brief</a>
        <span>Tell us what you need and instantly connect with world-class talent ready to work on your project.</span>
      </div>
 
      <section>
        <div className="steps-header">
          <h2>Unleash Your <span>Creativity</span></h2>
          <p>Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.</p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <div>{stepIcons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
 
      <section className="features">
        <div className="features-text">
          <h2>High-Resolution Outputs</h2>
          <p>Download your final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.</p>
          <a href="#">Get Started</a>
        </div>
        <div className="features-image">
          <img src="/images/download%20(2).jfif" alt="High resolution output dashboard" />
        </div>
      </section>
 
      <section>
        <div className="pricing-header">
          <h2>Suitable Packages for <span>Every Need</span></h2>
          <p>Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant.</p>
        </div>
        <div className="pricing-cards">
          {plans.map((p) => (
            <div className={p.featured ? "card-featured" : "card"} key={p.name}>
              <p className="plan">{p.name}</p>
              <h3>{p.price}</h3>
              <p>{p.note}</p>
              <hr />
              <ul>
                {p.features.map((f) => <li key={f}><CircleCheck />{f}</li>)}
              </ul>
              <a href="#">Get Started</a>
            </div>
          ))}
        </div>
      </section>
 
      <section className="testimonial">
        <div className="testimonial-card">
          <div className="company-logo"><p>Testimony</p></div>
          <p className="testimonial-text">"Sarima made it simple to find a designer who understood our brand. The whole process was smooth and professional."</p>
          <div className="testimonial-author">
            <div className="author-avatar"><img src="/images/Sarimalogo.jfif" alt="Jovita Nyeche" /></div>
            <p className="author-name">Jovita Nyeche</p>
            <p className="author-title">Founder, TechStart</p>
          </div>
        </div>
      </section>
 
      <HomeFooter />
    </>
  );
}
 