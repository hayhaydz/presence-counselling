const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://presencecounselling.co.uk',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
