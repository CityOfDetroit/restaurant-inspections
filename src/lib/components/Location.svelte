<script>
  import { base } from '$app/paths'

  export let establishment
  export let nearby = []

  const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam1jYnJvb20iLCJhIjoianRuR3B1NCJ9.cePohSx5Od4SJhMVjFuCQA'

  $: lon = establishment.geometry?.x
  $: lat = establishment.geometry?.y

  $: geojson = {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [lon, lat] },
    properties: {
      'marker-symbol': 'restaurant',
      'marker-color': '#ace',
      'fill-opacity': 0.8
    }
  }

  $: encoded = encodeURIComponent(JSON.stringify(geojson))
  $: mapUrl = `https://api.mapbox.com/styles/v1/jmcbroom/cjsunv74q0t5a1fmo902wmiq0/static/geojson(${encoded})/${lon},${lat},16,0,0/400x250@2x?access_token=${MAPBOX_TOKEN}`
  $: googleUrl = `https://www.google.com/maps/@${lat},${lon},18z`
</script>

<div class="ui two column stackable grid">
  <div class="row">
    <div class="column">
      <h3 class="ui header">
        <a href={googleUrl} target="_blank" rel="noopener noreferrer">
          {establishment.establishment_name}
          <div class="sub header">{establishment.address}, Detroit, MI, {establishment.zip_code}</div>
        </a>
      </h3>
      <img
        class="ui rounded bordered right floated image"
        alt="map of establishment location"
        src={mapUrl}
      />
    </div>
    <div class="column">
      <h3 class="ui header">Establishments nearby</h3>
      <div class="ui link divided relaxed large list" style="height: 275px; overflow-y: scroll;">
        {#each nearby as n}
          <div class="item">
            <div class="content">
              <a href="{base}/establishment/{n.establishment_id}" class="header">{n.establishment_name}</a>
              <div class="description" style="color: rgba(0, 0, 0, 0.6);">{n.address}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
