import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
 
const socials = [
  { href: "https://www.instagram.com/will.i.amsadele", Icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/WilliamsAd93465", Icon: FaXTwitter, label: "X" },
  { href: "https://github.com/williamsadele", Icon: FaGithub, label: "GitHub" },
];
 
const Icons = ({ list = socials }) => (
  <div className="footer-icons">
    {list.map(({ href, Icon, label }) => (
      <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={20} /></a>
    ))}
  </div>
);
 
export function ExploreFooter() {
  return (
    <footer className="foot-explore">
      <Link className="logo-footer" to="/">Sarima</Link>
      <Icons />
    </footer>
  );
}
 
export function HomeFooter() {
  return (
    <footer>
      <div className="foot">
        <div className="footer-content">
          <div className="footer-about">
            <p className="footer-label">ABOUT US</p>
            <h3>A modern approach to the user interface</h3>
            <p>We create a startup with an application for communication between friends, a created group or work. Build your next-gen community.</p>
          </div>
          <div className="footer-nav">
            <p className="footer-label">NAVIGATION</p>
            <ul>
              {["Home page", "About app", "Blog", "Single post", "Privacy Policy"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
              <li><Link to="/components">Component Library</Link></li>
            </ul>
          </div>
          <div className="footer-beta">
            <p className="footer-label">BETA APPLICATION</p>
            <h3>Join the beta for application</h3>
            <a href="#">About app</a>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>Sarima Community ©2026. All rights reserved. Created by WILLIAMS</p>
          <Icons list={socials.slice(1)} />
        </div>
      </div>
    </footer>
  );
}