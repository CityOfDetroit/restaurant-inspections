import turfDistance from '@turf/distance'

const BASE = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/food_service_establishment_inspections/FeatureServer'

function attrs(features) {
  return features.map(f => f.attributes)
}

// Returns array of establishment records matching name query
export async function searchEstablishments(query) {
  const where = `establishment_name LIKE '%${query.replace(/'/g, "''")}%'`
  const params = new URLSearchParams({
    where,
    outFields: 'establishment_id,establishment_name,address,zip_code,establishment_status',
    f: 'json',
    resultRecordCount: 50
  })
  const res = await fetch(`${BASE}/0/query?${params}`)
  const json = await res.json()
  return attrs(json.features || [])
}

// Returns single establishment attributes + geometry (WGS84)
export async function getEstablishment(id) {
  const params = new URLSearchParams({
    where: `establishment_id=${id}`,
    outFields: '*',
    outSR: '4326',
    returnGeometry: 'true',
    f: 'json'
  })
  const res = await fetch(`${BASE}/0/query?${params}`)
  const json = await res.json()
  if (!json.features || json.features.length === 0) return null
  const feature = json.features[0]
  return {
    ...feature.attributes,
    geometry: feature.geometry
  }
}

// Returns inspections for an establishment, newest first
export async function getInspections(establishmentId) {
  const params = new URLSearchParams({
    where: `establishment_id=${establishmentId}`,
    outFields: '*',
    orderByFields: 'inspection_date DESC',
    f: 'json'
  })
  const res = await fetch(`${BASE}/1/query?${params}`)
  const json = await res.json()
  return attrs(json.features || [])
}

// Returns violations for an array of inspection IDs
export async function getViolations(inspectionIds) {
  if (!inspectionIds || inspectionIds.length === 0) return []
  const where = `inspection_id IN (${inspectionIds.join(',')})`
  const params = new URLSearchParams({
    where,
    outFields: '*',
    f: 'json'
  })
  const res = await fetch(`${BASE}/2/query?${params}`)
  const json = await res.json()
  return attrs(json.features || [])
}

// Returns the most recent inspection date as an ISO string e.g. '2026-02-16'
export async function getMaxInspectionDate() {
  const params = new URLSearchParams({
    where: '1=1',
    outStatistics: JSON.stringify([{ statisticType: 'max', onStatisticField: 'inspection_date', outStatisticFieldName: 'max_date' }]),
    f: 'json'
  })
  const res = await fetch(`${BASE}/1/query?${params}`)
  const json = await res.json()
  return json.features?.[0]?.attributes?.max_date ?? null
}

// Returns up to 10 nearby establishments sorted by distance, excluding the given id
export async function getNearby(lon, lat, excludeId) {
  const params = new URLSearchParams({
    geometry: `${lon},${lat}`,
    geometryType: 'esriGeometryPoint',
    inSR: '4326',
    distance: 1,
    units: 'esriSRUnit_StatuteMile',
    outSR: '4326',
    returnGeometry: 'true',
    outFields: 'establishment_id,establishment_name,address',
    f: 'json'
  })
  const res = await fetch(`${BASE}/0/query?${params}`)
  const json = await res.json()
  return (json.features || [])
    .filter(f => String(f.attributes.establishment_id) !== String(excludeId))
    .map(f => ({
      ...f.attributes,
      _distance: turfDistance([lon, lat], [f.geometry.x, f.geometry.y], { units: 'miles' })
    }))
    .sort((a, b) => a._distance - b._distance)
    .slice(0, 10)
}
