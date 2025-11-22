# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # R K Enterprises — Developer Notes

    This README documents the changes and implementations made in this project to help future developers understand the structure, edits, and where to find key features.

    Project stack
    - React + TypeScript, Vite
    - Tailwind CSS for styling
    - react-router for routing
    - lucide-react for icons
    - AOS used for scroll animations

    Files and high-level changes
    Below are the main files modified and why. Use the file path (in backticks) to open them in your editor.

    - `src/components/layout/Header.tsx`
      - Implemented a mobile off-canvas drawer with backdrop, keyboard (Escape) and outside-click handling.
      - Fixed drawer layering: backdrop uses `bg-black/50` and `z-50`, drawer uses `z-[100]` and an opaque white background so page content does not show through.
      - Improved close/open focus behavior (focus returned to toggle button when closing).
      - Adjusted mobile CTA padding and increased mobile link touch targets (`NavLinkMobile` now uses `px-6` and `font-semibold`).

    - `src/components/ui/BackButton.tsx` (new)
      - Global back button rendered in `App.tsx` that hides on `/` and routes `/blog*` back to `/`.

    - `src/App.tsx`
      - Wired `BackButton` into the main layout (rendered above `Outlet`).

    - `src/components/blog/BlogPostTemplate.tsx`
      - Added a post-level back link above the Insights label for quick navigation to the blog list.

    - `src/pages/Blog.tsx`
      - Updated blog-listing badge text on each card from `SEO Article` to `READ ARTICLE`.
      - Blog listing maps `blogPostsMeta` to render cards; the small badge change applies to every card.

    - `src/pages/About.tsx`
      - Redesigned About hero into a two-column layout with director portraits and passport-style frames.
      - Implemented an auto-sliding infrastructure carousel (images updated to project assets, increased height, inner images use `object-contain`).
      - Wrapped page content in a centered container and moved infrastructure to a full-width background section.

    - `src/pages/Products.tsx`
      - Added a `GalleryPair` pattern to show two-image galleries for product categories.
      - Adjusted gallery frame heights for better presentation (`h-72` / `md:h-96`) and constrained inner images with `object-contain` and `max-h-*` classes.
      - Replaced many product gallery images with provided assets (e.g., `stationary2.png`, `paper1.png`, `paper2.png`, `file2.jpeg`, `binding2.png`, `chalk2.png`, `sports2.png`, `corousal4.png`).

    - `src/components/layout/Footer.tsx`
      - Updated company list to the specified five names and added `no-justify` class so footer content keeps left-aligned formatting (exceptions for global typography rules).

    - `src/index.css`
      - Global typography changes: paragraphs now use `text-align: justify`, `hyphens: none`, relaxed `line-height: 1.75`, and a small `word-spacing` to reduce large gaps.
      - Added exception rules that keep `footer p` and elements marked with `.no-justify` left-aligned and with normal hyphenation/spacing (so addresses and phone numbers are preserved).

    - `src/pages/Contact.tsx`
      - The `Our Locations` block is marked with `no-justify` so addresses and phone numbers are left-aligned and not hyphen-joined.
      - Replaced the map embed with a query-based Google Maps embed pinning the Head Office address: "69, Palaniappa Nagar, Thiruvakavundanur, Salem, Tamil Nadu 636005, India". This ensures the Contact page map always points to that address.

    Why some changes were made
    - Mobile nav: the overlay was showing content underneath due to low opacity and z-index; raising z-index and making the drawer opaque prevents bleed-through and improves UX.
    - Justified body text and hyphen removal were requested to make text edges align; `.no-justify` was added to avoid formatting address/phone numbers where hyphens or precise layout are required.

    Developer notes & conventions
    - Tailwind utilities are used almost everywhere. Edit classes directly in components unless a global/shared pattern should be created via `@layer components` in `src/index.css`.
    - When adding image assets, prefer importing from `src/assets` and use `loading="lazy"` and `decoding="async"` to improve loading.
    - For external embeds (Google Maps), query-based `q=...&output=embed` URLs are simpler and reliable; when exact lat/lng is required, prefer lat/lng or place-id embeds.

    How to run locally
    1. Install dependencies:
    ```powershell
    npm install
    ```
    2. Start the dev server:
    ```powershell
    npm run dev
    ```
    3. Open the site (port shown by Vite, e.g. `http://localhost:5173`) and visit pages to verify changes: `/', '/about', '/products', '/blog', '/contact'`.

    Visual QA checklist
    - Mobile nav drawer: open and confirm backdrop uses a semi-opaque black overlay and drawer is solid white, links have increased tap area.
    - Blog list: confirm badge reads `READ ARTICLE` on each card and `Read more →` link navigates to the post.
    - About page: confirm director portraits, carousel auto-advances and images maintain aspect with `object-contain`.
    - Products page: verify gallery frames, spacing, and images across breakpoints (mobile/tablet/desktop).
    - Contact map: verify the map pins `69, Palaniappa Nagar, Thiruvakavundanur, Salem, Tamil Nadu 636005, India`.

    Accessibility & future improvements
    - Consider adding a focus trap in the mobile drawer and setting `aria-hidden` on the page content when the drawer is open for improved keyboard/screen reader UX.
    - Consider switching justified text to `text-align: left` on narrow viewports if word gaps are large; or enable hyphenation selectively with `hyphens:auto` when needed.
    - Replace query-based Google Maps embed with a Place ID or lat/lng embed for consistent pin placement if reliability becomes an issue.

    If you want, I can also:
    - Run the dev server and take screenshots across breakpoints.
    - Convert the README into a developer-facing markdown with direct links to file paths or code snippets.

    — Implementation summary completed by the development assistant

    Backend (Contact form email) setup
    ----------------------------------

    This project includes a small Express-based API server (`server.js`) that accepts POST requests to `/api/contact` and sends emails using Nodemailer.

    What to install
    - Run this in the project root to install server deps:

    ```powershell
    npm install
    # or to install just the server deps if you prefer:
    npm install express nodemailer dotenv cors
    ```

    Environment variables
    ---------------------
    Create a `.env.local` file (do NOT commit it) with the following values:

    ```
    EMAIL_USER=your.email@gmail.com       # Gmail account (use an App Password)
    EMAIL_PASS=your-app-password          # Gmail app password (do NOT commit)
    EMAIL_TO=optional-forwarding@domain  # optional, defaults to EMAIL_USER
    PORT=3001                             # optional server port
    VITE_API_URL=http://localhost:3001    # set for Vite dev so frontend can target the API
    ```

    How to run the server

    1. Install dependencies (see above).
    2. Start the server:

    ```powershell
    npm run start-server
    ```

    3. Start the frontend in a separate terminal:

    ```powershell
    npm run dev
    ```

    Notes
    - The contact form (in `src/pages/Contact.tsx`) now POSTs to `/api/contact`. When developing, set `VITE_API_URL` to `http://localhost:3001` so the frontend targets the Express server.
    - The server uses `smtp.gmail.com` with secure TLS on port 465 — use a Gmail account with an App Password.
    - Do not hardcode credentials in the code. Keep `.env.local` out of source control.

