<script>
  export let data = []

  let activeIndex = null

  function toggle(i) {
    activeIndex = activeIndex === i ? null : i
  }
</script>

<div class="ui fluid accordion">
  {#each data as d, i}
    <div style="border-bottom: 1px solid rgba(34, 36, 38, 0.15); padding: 0.5em 0;">
      <div
        class="title {activeIndex === i ? 'active' : ''}"
        style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;"
        on:click={() => toggle(i)}
        role="button"
        tabindex="0"
        on:keydown={e => e.key === 'Enter' && toggle(i)}
      >
        {d.question}
        <i class="dropdown icon"></i>
      </div>
      {#if activeIndex === i}
        <div class="content active" style="padding: 0.5em 0;">
          <span style="color: rgba(0, 0, 0, 0.6);">{@html d.answer}</span>
        </div>
      {/if}
    </div>
  {/each}
</div>
