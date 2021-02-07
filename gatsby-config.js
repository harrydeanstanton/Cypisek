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
        key: 'AIzaSyDrTJb35UqU14f7CFjYb0BexL9cTweEyJA',
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
            center: `Szamotuły, Kopernika 4`,
            query: `Kopernika`,
            markers: [
              {
                location: `52.6212222721900, 16.5742751761446`,
                label: 'Żłobek Cypisek, Kopernika',
              },
            ],
            zoom: 18,
          },
          {
            center: `Szamotuły, Łąkowa 9`,
            query: `Łąkowa`,
            markers: {
              location: `52.604950593905144, 16.589948927010074`,
              label: 'Żłobek Cypisek, Łąkowa',
            },

            zoom: 18,
          },
        ],
      },
    },
  ],
};
