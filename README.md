# SARIMA - Module 1
 
Sarima is a design-marketplace concept (like Dribbble) built with React. This project rebuilds an original static HTML site as a proper React app: componentized, data-driven, and with client-side routing.
 
Live demo: https://sarima-react.vercel.app/
 
## Features
 
- Home page with hero, popular searches, pricing plans and step-by-step "how it works" section
- Explore page with a searchable, filterable grid of design shots
- Individual shot detail pages with like/save actions
- Reusable components (`Navbar`, `ShotCard`, footers) shared across pages
- Client-side routing with React Router (no full page reloads between routes)
## Tech stack
 
- React 18
- Vite (build tool / dev server)
- React Router DOM (routing)
- lucide-react / react-icons (icons)
## Project structure
 
src/
├── main.jsx            # app entry point
├── App.jsx             # route definitions
├── styles.css
├── pages/
│   ├── Home.jsx         # "/"
│   ├── Explore.jsx      # "/explore"
│   └── ShotDetail.jsx   # "/shots/:id"
├── components/
│   ├── Navbar.jsx
│   ├── ShotCard.jsx
│   └── Footer.jsx
└── data/
    └── designs.js        # sample design data
public/
└── images/               # design thumbnails
 
## Routes
 
| Path | Page | Description |
|---|---|---|
| `/` | Home | Landing page, hero search, pricing |
| `/explore` | Explore | Grid of all shots, live search + category filter |
| `/shots/:id` | ShotDetail | Single shot with like/save and a "Hire designer" CTA |
 
## Setup instructions
 
1. **Clone the repository**
```bash
   git clone https://github.com/williamsadele/sarima-react.git
   cd sarima-react
```
 
2. **Install dependencies**
```bash
   npm install
```
 
3. **Run the dev server**
```bash
   npm run dev
```
   Open the printed `http://localhost:5173` link in your browser.
 
4. **Build for production**
```bash
   npm run build
```
   Output goes to `dist/`.
 
5. **Preview the production build locally**
```bash
   npm run preview
```
 
## Deployment
 
This project is deployed on [Vercel](https://vercel.com). A `vercel.json` rewrite rule is included so that refreshing a route like `/explore` or `/shots/3` doesn't 404.
 
To deploy your own copy:
1. Push this repo to GitHub.
2. Go to vercel.com, click **Add New → Project**, and import the repo.
3. Framework preset: **Vite**. Leave build settings as default (`npm run build`, output `dist`).
4. Click **Deploy**.
## Notes & Architecture
- Rebuilt as part of the FlexiSAF Internship Program (Intermediate Track - Module 1).
- Built with React, Vite, and React Router to support client-side routing.
- Mock data resides in `src/data/designs.js`.