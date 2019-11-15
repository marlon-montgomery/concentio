require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Concentio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
      {
       resolve: 'gatsby-remark-audio',
       options: {
          preload: 'auto',
          loop: false,
          controls: true,
          muted: false,
          autoplay: false
        },      
      {   
    },
  ],
}
