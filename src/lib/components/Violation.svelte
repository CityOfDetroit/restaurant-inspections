<script>
  import metadata from '$lib/metadata.js'
  import ViolationExpanded from './ViolationExpanded.svelte'

  export let data

  $: summary = [
    data.item_description,
    data.sub_item?.toLowerCase(),
    data.problem_description?.toLowerCase(),
    data.sub_problem?.toLowerCase()
  ].filter(Boolean).join(' ')

  $: violationTypeColor = data.violation_type === 'Priority' ? 'red' : data.violation_type === 'Foundation' ? 'orange' : 'yellow'
  $: violationTypeLabel = data.violation_type === 'Foundation' ? 'Priority Foundation' : data.violation_type

  function formatDate(str) {
    // ArcGIS DateOnly fields come back as ISO strings like '2023-04-18'
    if (!str) return ''
    const [y, m, d] = str.split('-')
    return `${m}-${d}-${y}`
  }

  $: correctedIcon = data.is_corrected === 'True' || data.is_corrected === true
    ? 'check green'
    : data.is_corrected === 'False' || data.is_corrected === false
      ? 'times red'
      : 'ban grey'
</script>

<div class="ui segment">
  <h5 class="ui header">Code {data.violation_code}</h5>
  <ViolationExpanded
    summary={summary.trim()}
    fallback="Expand for full food code definition"
    vioDesc={data.violation_description}
  />
  <div style="padding-top: 10px;">
    <div
      class="ui {violationTypeColor} label"
      title={metadata.violations[data.violation_type]}
    >
      {violationTypeLabel}
    </div>
    <div class="ui label">
      <i class="icon {correctedIcon}"></i>
      {#if data.is_corrected === 'True' || data.is_corrected === true}
        Corrected on {formatDate(data.corrected_date)}
      {:else if data.is_corrected === 'False' || data.is_corrected === false}
        Not corrected
      {:else if data.is_corrected === 'Not required'}
        Reviewed at next routine inspection
      {:else}
        {data.is_corrected ?? ''}
      {/if}
    </div>
  </div>
</div>
