## PM Standards Hub — User Guide

Welcome to PM Standards Hub. This app helps you explore, compare, and apply three major project management standards: PMBOK 7, PRINCE2, and ISO 21500. Use it to quickly learn concepts, compare topics side‑by‑side, open precise references in the official PDFs, and generate a tailored project management plan.

### Who this guide is for
- Project managers and teams comparing standards
- Students preparing for certifications
- Organizations standardizing delivery methods


## Getting Started

Open the app in your browser. The top navigation bar gives quick access to all pages. Core workflows:
- Pick a topic on Home → jump to Compare or Summary
- Browse the Standards Library → open deep links to the PDFs
- Use Bibliography to search references and open exact pages
- Generate a tailored plan with the Process Generator


## Find What You Need Fast (Step‑by‑Step Recipes)

Below are the fastest paths to common goals.

- Find how a specific topic is treated across standards (fastest)
  1. Home → Quick Compare → select topic → Compare
  2. Review side‑by‑side cards; click “View Full Section” for details in the Library
  3. Use Bibliography blocks on Compare to open the exact PDF pages

- Get a quick, single‑page understanding of a topic
  1. Home → View Summary (or go to Summary and start typing in its search)
  2. Read Similarities, Differences, Unique Points
  3. Open References under each standard for primary sources

- Cite authoritative sources for a topic
  1. Go to Bibliography
  2. Filter by Topic and/or Standard, or search by keyword
  3. Click Open PDF to jump to the exact page (e.g., /Books/PMBOK7.pdf#page=35)

- Explore everything a standard says about multiple topics
  1. Open Standards Library
  2. Pick a standard tab (PMBOK 7, PRINCE2, ISO 21500)
  3. Use the left Contents; scan sections; open References under each topic as needed

- Create a tailored plan (for project proposals/charters)
  1. Home → “Customize your plan” or go to Process Generator
  2. Choose Project Type, Duration, Risk; click Generate Recommendation
  3. Download PDF (templated and ready to share)


## Navigation Overview

- Home: Overview and quick actions
- Standards Library: Full content per standard with sections, key points, and references
- Compare Topics: Side‑by‑side comparison across standards for a selected topic
- Summary: Consolidated view of a topic with similarities/differences and unique points
- Bibliography: Global references browser with search and filters; opens PDFs at exact pages
- Insights Dashboard: High‑level metrics and highlights (read‑only)
- Process Generator: Create and download a tailored PM process plan as a PDF

Top navigation behavior:
- The nav is sticky; it remains visible as you scroll.
- Active section is highlighted for context.
- Links are client‑side (instant), preserving scroll where applicable.


## Home

- Quick Compare: Choose a topic and click “Compare” to go directly to the comparison.
- View Summary: See a consolidated summary of the topic across standards.
- Open Bibliography for Topic: Opens the Bibliography filtered to the chosen topic and auto‑opens the first relevant PDF page.
- Customize your plan: Navigate to the Process Generator to create a tailored plan.

Tip: The default topic is set for convenience; change it using the dropdown.


## Standards Library

Browse each standard’s sections with structured content:
- Contents: Table of contents for the selected standard on the left
- Section View: Title, content, key points, and key practices
- References: Under each topic, you’ll find bibliography links that open the exact page in the corresponding PDF

Actions per section:
- Compare with Other Standards: Deep‑link to the Compare page for that specific topic
- View Bibliography: Jumps to the Bibliography page with the topic pre‑selected

Finding topics fast in Library:
- Use the top search to match across titles, content excerpts, and key points.
- Click a result to auto‑scroll to that section (deep link updates the URL to /library/:standardId/:sectionId).

Tips:
- Use the search bar at the top to search across all standards by keywords; click a result to jump to the section.
- Bookmarks: Click the bookmark icon to mark sections (visual indicator per session).


## Compare Topics

Compare how PMBOK 7, PRINCE2, and ISO 21500 treat the same topic.
- Topic selector: Pick your topic. Start typing to reveal a suggestion dropdown with topic titles and related matches from content.
- Standards selection: Toggle which standards to include (min. 2).
- View Full Section: Opens the section inside the Standards Library for deeper reading.
- Bibliography: Per‑standard references with deep links to PDF pages.
- Export: Download a concise comparison as a PDF.

Search suggestions UX:
- Type a keyword: the dropdown prioritizes title prefix matches, then broader content matches.
- Click a suggestion to auto‑select the topic and close the dropdown.

Power‑user tips:
- Use URL deep links like /compare?topic=risk-management to share preconfigured views.
- Hide a standard temporarily by unchecking it to focus on the others.


## Summary

A single‑page overview for a chosen topic:
- Top search box: start typing to see suggestions and select a topic
- Standard cards: Summaries with key points per standard
- Analysis section: Similarities, differences, and unique points across standards
- References: Per‑standard links under each card to view primary sources

Use this page for quick orientation before diving deeper.


## Bibliography

Search and filter references across all standards.
- Search: Find references by title, description, or file name
- Filters: Narrow by Standard (PMBOK 7, PRINCE2, ISO 21500) or Topic
- Open PDF: Opens the exact PDF page (e.g., /Books/PMBOK7.pdf#page=35)

Deep linking:
- You can navigate to /bibliography?topic=<topicId>&autoOpen=1 to filter and automatically open the first matching reference.

Note: Ensure your PDFs are present in public/Books with the expected names (PMBOK7.pdf, PRINCE2.pdf, ISO21500.pdf). Update paths/page numbers in src/data/references.ts if needed.

Reference selection strategy:
- Results show items curated per topic and standard; click any to validate source language quickly.
- In Compare/Summary/Library, references are also shown contextually for the current topic.


## Insights Dashboard

Provides high‑level views or summaries (when available). Use it to orient stakeholders with a quick, non‑technical overview.


## Process Generator

Create a tailored PM plan based on project characteristics.
1) Choose Project Type, Duration, and Risk Level
2) Click Generate Recommendation
3) Review the recommended elements and success factors
4) Download PDF: A styled PDF is generated with header, meta, wrapped content, and footer

Tips:
- Copy to clipboard to paste into your PM documents quickly.
- The PDF template avoids emoji rendering issues by default. To keep emojis, consider using an embedded Unicode font (contact devs to enable).

Design choices (what the generator optimizes for):
- Clarity over length: readable bullets instead of walls of text.
- Cross‑standard hints: blends strengths of PMBOK, PRINCE2, ISO when appropriate.
- Shareable artifact: default PDF format suitable for emails or charter appendices.


## Finding What You Need (Search Tips)

- Topic names: Try “Stakeholder Engagement”, “Risk Management”, “Quality Management”, “Change Management”, “Governance”.
- Concept keywords: “register”, “stage gate”, “performance domain”, “principles”, “assurance”.
- Partial words: Type a prefix to trigger suggestion matches quickly in Compare or Summary.
- Cross‑standard search: Use Library search for a unified index across all standards.

Where to search when:
- Need authoritative content? Use Library search.
- Need fast orientation? Use Summary search.
- Need to pick a topic to compare? Use Compare suggestions.
- Need sources for citations? Use Bibliography search/filters.


## Best Practices

- Start broad, then narrow:
  - Use Summary to get the big picture
  - Use Compare to examine differences
  - Use Library for authoritative detail
  - Use Bibliography to cite and read original sources
- Save time with deep links: open PDFs at the exact page for quick verification.
- Tailor your approach: use the Generator to produce a PDF plan you can attach to charters or proposals.

Shareable links:
- Any page with a topic parameter (e.g., /compare?topic=stakeholder-engagement) can be shared to reproduce the view.


## Troubleshooting

- PDF opens to a 404:
  - Confirm the PDF file exists under public/Books and matches the name in src/data/references.ts
  - Restart the dev server after adding files
- Suggestions not showing:
  - Ensure you typed at least one character
  - Try a broader keyword or a known topic title
- PDF export shows odd characters:
  - Emojis are sanitized by default; to keep them, embed a Unicode font in the PDF (requires a code change)

- Styling looks different in PDF vs app:
  - The PDF is a concise text‑first template for portability; paste into your own document templates if needed.


## FAQ

- Can I compare more than three standards?
  - The app focuses on PMBOK 7, PRINCE2, and ISO 21500. You can extend the dataset if needed.
- Can I add new topics or update references?
  - Yes. Update content in src/data/standards-data.json and references in src/data/references.ts.
- How do deep links work?
  - Internal routes preserve topic IDs in the URL (e.g., /compare?topic=<id>), and PDF links include page anchors (#page=N).


## Contact / Feedback

If you have ideas or find issues, share feedback with the development team so we can improve topic coverage, references, and export templates.


