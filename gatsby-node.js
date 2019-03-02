/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage }}) => {
  const res = await graphql(`
  {
    postgres {
      establishments: allEstablishmentsList {
        establishmentid
      }
    }
  }
  `)

  res.data.postgres.establishments.forEach(e => {
    createPage({
      path: `/establishment/${e.establishmentid}`,
      component: path.resolve('./src/templates/establishment-page.js'),
      context: {
        eid: e.establishmentid,
      },
    })
  })
}
