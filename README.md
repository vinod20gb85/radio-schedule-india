# Radio Schedule India

A responsive, static HTML website collecting selected Akashvani (All India Radio) Medium Wave/FM cue-sheet links and international Shortwave schedules.

## Features

- Mobile-friendly layout with no build step or backend.
- Five Akashvani station cards with links to Prasar Bharati cue sheets.
- International Shortwave schedules shown in Indian Standard Time (IST).
- Live date and clock using the `Asia/Kolkata` time zone.
- Search and time-of-day filtering for Shortwave entries.
- Easy-to-edit HTML, CSS and JavaScript.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

Optional local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `radio-schedule-india`.
2. Add `index.html`, `styles.css`, `script.js`, `README.md`, and `LICENSE`.
3. Push the files to the repository's default branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site; the published URL will appear in the Pages settings.

## Updating schedules

- **Akashvani:** station buttons link to Prasar Bharati cue sheets. Those pages are maintained by the source website; this project does not scrape or copy their daily programme data.
- **International Shortwave:** edit the table rows in `index.html`. Each row has `data-period="morning"` or `data-period="evening"` for the filter.
- All listed times are presented as IST. Confirm current schedules with broadcasters because frequencies and broadcast times may change.

## Current listed stations

| Station | Frequency | Cue sheet |
|---|---:|---|
| Dharwad | 765 kHz | https://cuesheets.prasarbharati.org/viewsheet/472 |
| Mangaluru | FM 100.3 MHz; MW 1089 kHz | https://cuesheets.prasarbharati.org/viewsheet/344 |
| Bengaluru | 612 kHz | https://cuesheets.prasarbharati.org/viewsheet/349 |
| Tiruchirappalli | 936 kHz | https://cuesheets.prasarbharati.org/viewsheet/199 |
| Chennai | 720 kHz | https://cuesheets.prasarbharati.org/viewsheet/398 |

## Important note

This is an independent community-made reference page, not an official Akashvani, Prasar Bharati, BBC, China Radio International, Vatican Radio, or Adventist World Radio website. Shortwave schedules are based on the initial information supplied for the project and should be independently verified.

## License

MIT License. See `LICENSE`.
