<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
</svelte:head>

<script>
  import { base } from '$app/paths'
  import { onMount } from 'svelte'
  import { getMaxInspectionDate } from '$lib/arcgis.js'
  import metadata from '$lib/metadata.js'

  let maxDate = null

  onMount(async () => {
    maxDate = await getMaxInspectionDate()
  })

  function formatDate(str) {
    if (!str) return ''
    const [y, m, d] = str.split('-')
    return `${m}-${d}-${y}`
  }
</script>

<header style="border-bottom: 5px solid #feb70d; margin-bottom: 1.5rem;">
  <div style="margin: 0 auto; max-width: 960px; padding: 1rem 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="width: 70px;">
        <a href="https://detroitmi.gov/" target="_blank" rel="noopener noreferrer">
          <img src="{base}/cod-logo.jpg" style="width: 100%; height: auto;" alt="City of Detroit logo" />
        </a>
      </div>
      <a href="{base}/" style="color: black; text-decoration: none;">
        <h2 style="margin: 0;">DETROIT RESTAURANT INSPECTIONS</h2>
      </a>
    </div>
    <nav>
      <a href="{base}/" style="color: #004445; text-decoration: none; margin-right: 2em;">HOME</a>
      <a href="{base}/about" style="color: #004445; text-decoration: none;">ABOUT</a>
    </nav>
  </div>
</header>

<main style="margin: 0 auto; max-width: 960px; padding: 0 1rem 1.5rem;">
  <slot />
</main>

<footer style="margin: 0 auto; max-width: 960px; padding: 0 1rem 2rem; text-align: right; font-size: 0.85em; color: rgba(0,0,0,0.6);">
  Built using <a href={metadata.links.openData.url} target="_blank" rel="noopener noreferrer">{metadata.links.openData.display}</a>
  {#if maxDate}
    | Inspection data through {formatDate(maxDate)}
  {/if}
</footer>
