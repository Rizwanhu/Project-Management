## PM Standards Hub

Compare, explore, and cite project management standards: PMBOK 7, PRINCE2, and ISO 21500. Generate a tailored PM process plan as a shareable PDF.

### Key Features
- Standards Library: Full content per standard with sections, key points, practices, and per-topic References (deep links to PDFs)
- Compare Topics: Side‑by‑side comparison of a selected topic across standards, with per‑standard bibliography and quick export
- Summary: One‑page overview of similarities, differences, and unique points per topic
- Bibliography: Global search/filter of references; open PDFs at exact pages
- Process Generator: Configure project characteristics and download a styled PDF plan
- Insights Dashboard: High‑level highlights (read‑only)

### Demo Flows
- Quick Compare: Home → pick topic → Compare
- Fast Orientation: Home → View Summary
- Cite Sources: Bibliography → search/filter → open PDF at `#page=N`
- Tailored Plan: Home → Customize your plan → Generate → Download PDF

## Quick Start

Prerequisites: Node.js and npm (recommend installing via nvm)

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

The dev server runs at `http://localhost:8080` by default (see `vite.config.ts`).

## Configuration

### Public PDFs
Place the official standard PDFs under:

```
public/Books/PMBOK7.pdf
public/Books/PRINCE2.pdf
public/Books/ISO21500.pdf
```

Reference links are defined in:
- `src/data/references.ts`

If filenames or page numbers differ, update `bookPath` and `page` accordingly. Links open as `/Books/<file>.pdf#page=<N>`.

### Aliases
- `@` resolves to `src/` (see `vite.config.ts`).

## Scripts

```sh
npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview production build
```

## Project Structure

```
src/
  pages/
    Home.tsx          # landing; quick actions (Compare, Summary, Bibliography, Generator)
    Library.tsx       # standards content + per-topic references
    Compare.tsx       # side-by-side comparison + per-standard bibliography
    Summary.tsx       # consolidated analysis + references
    Bibliography.tsx  # reference search & filters; opens PDFs at page
    Generator.tsx     # process plan generator; PDF export template
    Insights.tsx      # highlights/metrics
  data/
    standards-data.json  # content dataset
    references.ts        # PDF reference mapping
  contexts/
    SearchContext.tsx    # cross-page search state
  components/            # UI building blocks (shadcn-ui based)
```

## Usage Guide

See `user_guide.md` for detailed, step‑by‑step workflows, best practices, and troubleshooting.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn‑ui
- lucide‑react icons
- jsPDF for PDF export

## Contributing

1. Fork and clone
2. Create a branch: `git checkout -b feature/your-change`
3. Commit: `git commit -m "feat: your change"`
4. Push and open a PR

## License

This project is provided as‑is for educational and organizational use. Add your license details here.
