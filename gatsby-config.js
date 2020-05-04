const styleVariables = require("./src/styles/variables")

module.exports = {
  siteMetadata: {
    title: `Marcomidinhas`,
    description: `O "livro" público de receitas da família Marconi.`,
    author: `@___marconi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Be+Vietnam:700,800`, `Rufina:400,700`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `marcomidinhas`,
        short_name: `Comidinhas`,
        start_url: `/`,
        background_color: styleVariables.color.primary,
        theme_color: styleVariables.color.primary,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
