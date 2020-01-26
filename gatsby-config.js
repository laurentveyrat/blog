module.exports = {
  siteMetadata: {
    title: `BLOG de Laurent VEYRAT`,
    description: `BLOG de Laurent VEYRAT, développeur front end javascript react`,
    author: `Laurent Veyrat`,
    bio: `Passionné de développement web et de technologie futuriste :)`,
    authorImage: `https://media-exp2.licdn.com/dms/image/C5603AQFDW3S7O9tFbg/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=jycpLEtXrHT6nxF4530ZhGTHPmWhL53mWeFQeLKfyI0`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/blog/` },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-less",
      options: {
        modifyVars: require("./src/theme/antd.js"),
        // Needed to load antdesign less files.
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        // Activate less files
        style: true,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
