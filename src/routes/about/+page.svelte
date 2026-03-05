<svelte:head>
  <title>About - Restaurant Inspections Detroit</title>
</svelte:head>

<script>
  import metadata from '$lib/metadata.js'
  import FAQ from '$lib/components/FAQ.svelte'
</script>

<h1 class="ui header">About</h1>

<p>This site provides information about food safety inspections in the City of Detroit.</p>

<p>
  The data includes restaurants and other food service establishments, like school cafeterias
  and stadium concessions, that are inspected by the
  <a href={metadata.links.dhd.url} target="_blank" rel="noopener noreferrer">{metadata.links.dhd.display}</a>.
</p>

<p>
  Grocery stores, liquor stores, and other packaged food establishments are inspected by the
  <a href={metadata.links.mdard.url} target="_blank" rel="noopener noreferrer">{metadata.links.mdard.display}</a>
  and are not included here.
</p>

<p>
  If a restaurant, bar, or other food service establishment that prepares or serves food and
  beverages in Detroit is not found in this data, please email
  <a href={metadata.links.dhdEmail.url} target="_blank" rel="noopener noreferrer">{metadata.links.dhdEmail.display}</a>
  or call
  <a href={metadata.links.dhdPhone.url} target="_blank" rel="noopener noreferrer">{metadata.links.dhdPhone.display}</a>
  for follow up. Please include the name and address of the establishment, and the date and
  time of your visit in your message.
</p>

<h2 class="ui header">Frequently Asked Questions</h2>
<h4 class="ui header">About the data</h4>
<FAQ data={metadata.faqs_data} />

<h4 class="ui header" style="margin-top: 1.5em;">About the inspection process</h4>
<FAQ data={metadata.faqs_process} />

<h2 class="ui header" style="margin-top: 1.5em;">Share Feedback</h2>
<p>
  This site is built by the
  <a href={metadata.links.odt.url} target="_blank" rel="noopener noreferrer">{metadata.links.odt.display}</a>
  team at the City of Detroit in partnership with the Detroit Health Department using
  <a href={metadata.links.openData.url} target="_blank" rel="noopener noreferrer">{metadata.links.openData.display}</a>.
  Our code is on
  <a href={metadata.links.git.url} target="_blank" rel="noopener noreferrer">{metadata.links.git.display}</a>.
</p>
<p>
  Have an idea or question? Use
  <a href={metadata.links.feedbackForm.url} target="_blank" rel="noopener noreferrer">{metadata.links.feedbackForm.display}</a>
  to get in touch with our project team or email
  <a href={metadata.links.dhdEmail.url} target="_blank" rel="noopener noreferrer">{metadata.links.dhdEmail.display}</a>.
</p>
<br />
