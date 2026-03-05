<script>
  export let summary = ''
  export let fallback = ''
  export let vioDesc = ''

  let active = false
</script>

<div class="ui accordion">
  <div
    class="title {active ? 'active' : ''}"
    style="display: flex; justify-content: space-between; align-items: center; font-weight: 500; color: #000; cursor: pointer;"
    on:click={() => active = !active}
    role="button"
    tabindex="0"
    on:keydown={e => e.key === 'Enter' && (active = !active)}
  >
    {summary === 'null' || !summary ? fallback : summary}
    {#if vioDesc}
      <i class="dropdown small icon"></i>
    {/if}
  </div>
  {#if active && vioDesc}
    <div class="content active" style="padding: 0 1em 1em 1em; color: rgba(0, 0, 0, 0.6);">
      <span style="color: #000;">FULL FOOD CODE:</span><br />
      {vioDesc}
    </div>
  {/if}
</div>
