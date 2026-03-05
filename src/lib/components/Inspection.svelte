<script>
  import metadata from '$lib/metadata.js'
  import Violation from './Violation.svelte'

  export let inspections = []
  export let violations = []

  let activeIndex = null

  function toggle(i) {
    activeIndex = activeIndex === i ? null : i
  }

  function getViolationsForInspection(inspectionId) {
    return violations.filter(v => v.inspection_id === inspectionId)
  }

  function formatDate(str) {
    // ArcGIS DateOnly fields come back as ISO strings like '2021-04-12'
    if (!str) return ''
    const [y, m, d] = str.split('-')
    return `${m}-${d}-${y}`
  }

  function isCompliant(val) {
    return val === 'True' || val === true
  }

  function isNonCompliant(val) {
    return val === 'False' || val === false
  }
</script>

<div class="ui fluid styled accordion">
  {#each inspections as insp, i}
    <div>
      <div
        class="title {activeIndex === i ? 'active' : ''}"
        style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;"
        on:click={() => toggle(i)}
        role="button"
        tabindex="0"
        on:keydown={e => e.key === 'Enter' && toggle(i)}
      >
        <div>
          <h3 style="margin: 0 0 0.25em 0;">{formatDate(insp.inspection_date)}</h3>
          <div style="font-size: 0.9em; font-weight: normal; color: rgba(0,0,0,0.6);">
            {insp.inspection_type}
            {#if isCompliant(insp.is_in_compliance)}
              <i class="check green icon"></i>
            {:else if isNonCompliant(insp.is_in_compliance)}
              <i class="times red icon"></i>
            {/if}
          </div>
        </div>
        <i class="dropdown icon"></i>
      </div>
      {#if activeIndex === i}
        {@const inspViolations = getViolationsForInspection(insp.inspection_id)}
        <div class="content active">
          <table class="ui basic very celled compact table">
            <tbody>
              <tr class={isCompliant(insp.is_in_compliance) ? 'positive' : isNonCompliant(insp.is_in_compliance) ? 'negative' : ''}>
                <td><strong>Outcome</strong></td>
                <td>
                  {isCompliant(insp.is_in_compliance) ? 'Compliant' : isNonCompliant(insp.is_in_compliance) ? 'Not compliant' : insp.is_in_compliance}
                  <span style="margin-left: 0.5em;">
                    <span
                      class="ui circular mini grey icon button"
                      style="cursor: help;"
                      title={metadata.outcomes[isCompliant(insp.is_in_compliance) ? 'Yes' : 'No'] ?? ''}
                    >?</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <h5 class="ui header">
            {inspViolations.length} {inspViolations.length === 1 ? 'violation' : 'violations'} cited{inspViolations.length > 0 ? ':' : ''}
          </h5>
          {#if inspViolations.length > 0}
            <div class="ui vertical divided segments">
              {#each inspViolations as v}
                <Violation data={v} />
              {/each}
            </div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>
