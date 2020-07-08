require('dotenv/config')

const credentials = {
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
    new RegExp('\\\\n', 'g'),
    '\n'
  ),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
}

module.exports = {
  siteMetadata: {
    title: `Me Indica!`,
    description: `Um projeto para ajudar pessoas que estão procurando emprego neste momento.`,
    author: `@ritalinux`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        worksheetTitle: 'Respostas ao formulário 1',
        credentials,
      }
    },
    'gatsby-plugin-chakra-ui',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
