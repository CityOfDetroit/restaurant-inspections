require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Detroit Restaurant Inspections`,
    description: `Search restaurant inspections open data from the Detroit Health Department.`,
    author: `Detroit Open Data Team`,
  },
  pathPrefix: "/restaurant-inspections",
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-source-build-date`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9fd5b3`,
        theme_color: `#9fd5b3`,
        display: `minimal-ui`,
        icon: `src/images/cod-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-pg`,
      options: {
        connectionString: process.env.PG_CONN,
        schema: `mart_health`,
        appendPlugins: [require("postgraphile-plugin-connection-filter")],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107915075-9"
      }
    },
    `gatsby-plugin-less`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
