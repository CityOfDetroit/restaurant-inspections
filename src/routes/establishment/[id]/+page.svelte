<svelte:head>
  <title>{establishment ? establishment.establishment_name : 'Loading...'} - Restaurant Inspections Detroit</title>
</svelte:head>

<script>
  import { page } from '$app/stores'
  import { getEstablishment, getInspections, getViolations, getNearby } from '$lib/arcgis.js'
  import Establishment from '$lib/components/Establishment.svelte'
  import Inspection from '$lib/components/Inspection.svelte'
  import Location from '$lib/components/Location.svelte'

  let establishment = null
  let inspections = []
  let violations = []
  let nearby = []
  let loading = true
  let error = null

  async function loadEstablishment(id) {
    loading = true
    error = null
    establishment = null
    inspections = []
    violations = []
    nearby = []

    try {
      establishment = await getEstablishment(id)
      if (!establishment) {
        error = 'Establishment not found.'
        loading = false
        return
      }

      const [insp, nearbyResults] = await Promise.all([
        getInspections(id),
        establishment.geometry
          ? getNearby(establishment.geometry.x, establishment.geometry.y, id)
          : Promise.resolve([])
      ])

      inspections = insp
      nearby = nearbyResults

      const inspectionIds = inspections.map(i => i.inspection_id)
      violations = await getViolations(inspectionIds)
    } catch (e) {
      error = e.message
    }
    loading = false
  }

  $: loadEstablishment($page.params.id)
</script>

{#if loading}
  <div class="ui active centered inline loader"></div>
{:else if error}
  <div class="ui negative message">
    <div class="header">Error</div>
    <p>{error}</p>
  </div>
{:else if establishment}
  <h2 class="ui header">
    {establishment.establishment_name}
    <div class="sub header">{establishment.address}</div>
  </h2>

  <div class="ui divider"></div>

  <h3 class="ui header">{establishment.establishment_type}</h3>
  <Establishment e={establishment} />

  <div class="ui divider"></div>

  <h3 class="ui header">
    {inspections.length} Inspections
    <div class="sub header">Since 8-1-2016</div>
  </h3>
  <Inspection {inspections} {violations} />

  <div class="ui visible small message">
    <div class="header">About inspections</div>
    A restaurant is <strong>compliant</strong> <i class="check green icon"></i>
    when zero Priority or Priority Foundation violations are cited during an inspection,
    or when all are corrected; Core violations will be reviewed at the next routine
    inspection and are not required to be corrected to be in compliance.
  </div>

  {#if establishment.geometry}
    <div class="ui divider"></div>
    <Location {establishment} {nearby} />
  {/if}
{/if}
