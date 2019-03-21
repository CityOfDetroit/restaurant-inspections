create or replace function search_establishments(input text) returns setof establishments 
  as $$ select * from establishments
    where name ilike ('%' || input || '%')
  $$ language sql stable;

create or replace function establishments_nearby(o establishments) returns setof establishments 
  as $$ select e.* from establishments e
    where o.establishmentid != e.establishmentid
      and e.geom is not null
      and o.geom is not null
    order by o.geom <-> e.geom asc
    limit 10 
  $$ language sql stable;

create or replace function establishments_coords(e establishments) returns text 
  as $$ select concat_ws(
    ',',
    round(st_x(e.geom) :: numeric, 5),
    round(st_y(e.geom) :: numeric, 5)
  ) 
  $$ language sql stable;

create or replace function establishments_geojson(e establishments) returns jsonb 
  as $$ select jsonb_build_object(
    'type',       'Feature',
    'id',         e.establishmentid,
    'geometry',   ST_AsGeoJSON(e.geom)::jsonb,
    'properties', to_jsonb(e) - 'geom'
  ) e
  $$ language sql stable;
