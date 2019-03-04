create
or replace function establishments_nearby (o establishments) returns setof establishments as $$
select
  e.*
from
  establishments e
where
  o.establishmentid != e.establishmentid
  and e.geom is not null
  and o.geom is not null
order by
  o.geom <-> e.geom asc
limit
  10 $$ language sql stable;

CREATE
OR REPLACE FUNCTION establishments_coords(e establishments) RETURNS text AS $$
SELECT
  concat_ws(
    ',',
    round(st_x(e.geom) :: numeric, 5),
    round(st_y(e.geom) :: numeric, 5)
  ) $$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION establishments_geojson(e establishments) RETURNS jsonb AS $$
SELECT jsonb_build_object(
    'type',       'Feature',
    'id',         e.establishmentid,
    'geometry',   ST_AsGeoJSON(e.geom)::jsonb,
    'properties', to_jsonb(e) - 'geom'
) e
$$ LANGUAGE sql STABLE;
