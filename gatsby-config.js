module.exports = {
  siteMetadata: {
    title: "Presence Counselling",
    description: "A safe presence in your time of need. Providing online counselling in Shrewsbury, Welshpool. For young people and adults.",
    url: "https://presencecounselling.co.uk",
    siteUrl: "https://presencecounselling.co.uk",
    image: "/social_image.jpg" 
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Presence Counselling`,
        short_name: `Presence`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#1F3EEA`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
