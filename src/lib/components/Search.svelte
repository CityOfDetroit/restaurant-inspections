<script>
  import { base } from '$app/paths'
  import { searchEstablishments } from '$lib/arcgis.js'

  let query = ''
  let results = []
  let loading = false
  let timer

  function handleInput() {
    clearTimeout(timer)
    if (query.length < 3) {
      results = []
      return
    }
    loading = true
    timer = setTimeout(async () => {
      results = await searchEstablishments(query)
      loading = false
    }, 300)
  }
</script>

<div class="ui fluid search">
  <div class="ui big fluid input {loading ? 'loading' : ''}">
    <input
      type="text"
      placeholder="Search by name..."
      bind:value={query}
      on:input={handleInput}
    />
  </div>
  {#if results.length > 0}
    <div class="ui relaxed divided list" style="margin-top: 1em;">
      {#each results as r}
        <div class="item" style="padding: 0.5em 0;">
          <div class="content">
            <a href="{base}/establishment/{r.establishment_id}" style="font-weight: 700; display: block;">
              {r.establishment_name}
            </a>
            <div class="description">{r.address}</div>
          </div>
        </div>
      {/each}
    </div>
  {:else if query.length >= 3 && !loading}
    <p style="margin-top: 1em; color: rgba(0,0,0,0.6);">No results found.</p>
  {/if}
</div>
