# restaurant-inspections

Search restaurant inspection data from the Detroit Health Department.

Built with Gatsby, a static-site generator for React & GraphQL.

## Data 

We're using the `gatsby-source-pg` plugin to query data from PostgreSQL. Find a database dump in `src/data/restaurants.sql.bz2`.

Assuming you have PostgreSQL installed locally, import the db dump from your shell:
```bash
createdb restaurants
psql -d restaurants -c 'create extension postgis'
bunzip2 restaurants.sql.bz2
psql -d restaurants < restaurants.sql
```

You'll find three tables in the `public` schema: `establishments`, `inspections` and `violations`. An establishment can have many inspections, and an inspection can have many violations. Following the [PostGraphile docs](https://www.graphile.org/postgraphile/introduction/), we've pre-defined indexes, foreign key constraints, and one postgres function in our database. 

Here's a copy of that function; it queries restaurants on name and returns a list:
```psql
create or replace function search_establishments (input text)
        returns setof establishments as $$
        select * from establishments
                where name ilike ('%' || input || '%')
        $$ language sql stable;
```

It translates to this handy GraphQL query:
```gql
{
  searchEstablishments(input: "taqueria") {
    edges {
      node {
        establishmentid
        name
        address
      }
    }
  }
}
```

This data comes from [Detroit's open data portal](https://data.detroitmi.gov/browse?q=restaurants).

## Develop

Install Gatsby CLI globally: `npm install --global gatsby-cli`

Define your database connection string in `.env.development`:
```
PG_CONN=postgres://{user}:{password}@{host}:{port}/{dbname}
```

`yarn install` or `npm install` installs depenedencies

`gatsby develop` starts the development server and GraphiQL, an in-browser IDE for our site's data

## Styling

We're using React Semantic UI with Less. 

Customize Semantic UI by editing files in `src/semantic/site`. This [customization guide](http://learnsemantic.com/developing/customizing.html) explains that file structure.

This [starter](https://github.com/pretzelhands/gatsby-starter-semantic-ui) was a helpful guide.

## Helpful links

- [Gatsby documentation](https://www.gatsbyjs.org/)
- [gatsby-source-pg plugin](https://www.gatsbyjs.org/packages/gatsby-source-pg/)
- [PostGraphile documentation](https://www.graphile.org/postgraphile/)
- [React Semantic UI](https://react.semantic-ui.com/)
