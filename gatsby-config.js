require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Cypisek Nursery',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/images/',
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
        styles: [
          {
            feature: `poi`,
            element: `labels`,
            rules: {
              visibility: `off`,
            },
          },
        ],
        maps: [
          {
            center: `48.461470,-123.297833`,
          }
        ],
        query: `GOOGLE_MAPS_URL_QUERY`,
      },
    },
  ],
};
