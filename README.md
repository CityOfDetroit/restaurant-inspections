# Restaurant Inspections

A SvelteKit app for exploring food safety inspection data in the City of Detroit.

## Overview

This site provides searchable access to restaurant and food service establishment inspection records maintained by the Detroit Health Department. It includes restaurants, school cafeterias, stadium concessions, and other food service establishments inspected by DHD.

Grocery stores, liquor stores, and other packaged food establishments are inspected by the Michigan Department of Agriculture & Rural Development (MDARD) and are not included.

## Data

Data is sourced from the [Restaurant Inspections dataset](https://data.detroitmi.gov/datasets/detroitmi::restaurant-inspections-2) on Detroit's Open Data portal, accessed via the ArcGIS REST API. The feature service has three layers:

| Layer | Contents |
|-------|----------|
| 0 | Establishments |
| 1 | Inspections |
| 2 | Violations |

All data fetching is handled in `src/lib/arcgis.js`. No backend or database is required — the app queries the ArcGIS feature service directly from the browser.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) with the static adapter
- [Svelte 5](https://svelte.dev/)
- [Vite](https://vitejs.dev/)
- [Turf.js](https://turfjs.org/) (`@turf/distance`) for nearby establishment distance calculations
- [Semantic UI](https://semantic-ui.com/) for styling

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The app is deployed to [Netlify](https://www.netlify.com/). The build command is `npm run build` and the publish directory is `build`, as configured in `netlify.toml`.

## Related Resources

- [Detroit Health Department](https://detroitmi.gov/departments/detroit-health-department)
- [DHD Food Safety](https://detroitmi.gov/departments/detroit-health-department/programs-and-services/food-safety)
- [Detroit Open Data Portal](https://data.detroitmi.gov/)
- [Michigan Food Code](https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf)
- [SvelteKit docs](https://kit.svelte.dev/docs)
- [ArcGIS REST API](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer/)
