# Sarima

Sarima is a design-marketplace concept (like Dribbble) built with React. This project rebuilds an original static HTML site as a proper React app: componentized, data-driven, and with client-side routing.

**Live demo:** [add your Vercel URL here after deploying]

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

```
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
```

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Landing page, hero search, pricing |
| `/explore` | Explore | Grid of all shots, live search + category filter |
| `/shots/:id` | ShotDetail | Single shot with like/save and a "Hire designer" CTA |

## Setup instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/sarima-react.git
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

## Notes

- Sample design categories in `data/designs.js` are placeholders and can be adjusted.
- This is a learning/portfolio project and not connected to a real backend.

## UI Kit (Week 2)

A small set of generic, reusable components lives in `src/components/ui/`. They are not tied to Sarima, so they can be reused in any project. All of them are shown in every state on the live **`/components`** page.

### Styling approach

**Plain CSS with design tokens.** Every colour, spacing value, font size, radius and shadow is defined once as a CSS variable in `src/styles/tokens.css`. Component stylesheets only use `var(--token-name)`, never hardcoded values, so changing one token (for example `--color-primary`) updates every component at once. Each component has its own `.css` file next to its `.jsx` file, with BEM-style class names (`ui-button`, `ui-button--primary`) so styles never collide.

### Components and documented states

| Component | Props | States |
|---|---|---|
| `Button` | `variant`, `disabled`, `loading`, `onClick` | default, hover, focus, active, disabled, loading |
| `Input` | `label`, `value`, `onChange`, `placeholder`, `error`, `disabled` | empty (placeholder), filled, hover, focus, error, disabled |
| `Card` | `image`, `title`, `description`, `footer`, `children` | default, hover, text-only, image-only (empty body) |
| `List` | `items`, `renderItem`, `loading`, `emptyMessage` | default, loading, empty |
| `Alert` | `type` | success, error, warning, info |
| `Spinner` | `size` | spinning |

Each component file starts with a comment block listing its props and states, and each state in the CSS has a comment heading above its rules.

### Avoiding duplicate one-off patterns

Buttons, inputs, cards, lists and alerts are each styled in one place only. Page-level code (such as `Home.jsx` and `Explore.jsx`) should reuse these components instead of restyling the same element.

### Design to code, and where AI helped

I rebuilt the Sarima Home and Explore screens, originally static HTML pages, as React components.

- **Where AI helped:** converting repeated HTML into components and data arrays, replacing pasted SVG icons with `lucide-react` icons, setting up React Router, and drafting the token file and component structure.
- **Where AI fell short:** it guessed the category for each design, so I corrected them by hand. Its first version did not include the CSS needed to open the mobile menu, the icon-font link was easy to lose, and some import paths and file names did not match my real folders. I had to debug these myself by reading the console and terminal errors.

### Where to find things

- Tokens: `src/styles/tokens.css`
- Components: `src/components/ui/`
- Component showcase page: `/components` (`src/pages/ComponentLibrary.jsx`)