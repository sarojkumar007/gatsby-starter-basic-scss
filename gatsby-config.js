module.exports = {
  siteMetadata: {
    title: `gatsby-starter-basic-scss`,
    author: {
      name: `Saroj Kumar Sahoo`,
      summary: `Front-end Developer and Designer`,
    },
    description: `gatsby-starter-basic-scss`,
    siteUrl: `https://www.yourdomain.tld`,
    social: {
      twitter: `@`,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Gatsby Starter Basic Scss`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      }
    }]
};