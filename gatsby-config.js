require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.lentrepreneuriatfrancais.fr",
    title: "L'Entrepreneuriat Français",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    '@contentful/rich-text-react-renderer',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
