<script>
  import metadata from '$lib/metadata.js'
  export let e
</script>

<table class="ui basic very celled striped compact table">
  <tbody>
    <tr class={e.establishment_status === 'Open' ? 'positive' : ''}>
      <td><strong>Status</strong></td>
      <td>{e.establishment_status === 'Open' ? 'Licensed' : 'Not Licensed'}</td>
    </tr>
    <tr>
      <td><strong>License type</strong></td>
      <td>{e.establishment_license_type}</td>
    </tr>
    <tr>
      <td><strong>State license number</strong></td>
      <td>{e.establishment_license_number}</td>
    </tr>
    <tr>
      <td><strong>Owner</strong></td>
      <td>{e.establishment_owner}</td>
    </tr>
    <tr>
      <td><strong>Complexity level</strong></td>
      <td>
        {e.establishment_complexity_level ?? 'Unknown'}
        {#if e.establishment_complexity_level && metadata.risks[e.establishment_complexity_level]}
          <span
            class="ui circular mini grey icon button"
            style="margin-left: 0.5em; cursor: help;"
            title={metadata.risks[e.establishment_complexity_level]}
          >?</span>
        {/if}
      </td>
    </tr>
    <tr>
      <td><strong>Review frequency</strong></td>
      <td>
        {Math.round(e.num_review_frequency) === 0 ? 'Unknown' : `Every ${Math.round(e.num_review_frequency)} days`}
      </td>
    </tr>
  </tbody>
</table>
