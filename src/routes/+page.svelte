<svelte:head>
  <title>Restaurant Inspections - Detroit</title>
</svelte:head>

<script>
  import { base } from '$app/paths'
  import Search from '$lib/components/Search.svelte'
</script>

<section style="font-size: 1.25em; font-weight: 600; margin-bottom: 1.25em;">
  Explore information about food safety inspections in the City of Detroit
</section>

<section style="font-size: 1em; margin-bottom: 2em;">
  Start typing below to find restaurants and other food service establishments, like school
  cafeterias and stadium concessions, that are inspected by the Detroit Health Department
  or click <a href="{base}/about">ABOUT</a> to learn more.
</section>

<section style="margin-bottom: 1.25em;">
  <Search />
</section>
