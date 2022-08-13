module.exports = {
    siteMetadata: {
      description: "Personal site of Jiayun Fang",
      locale: "en",
      title: "Jiayun Fang",
      formspreeEndpoint: "https://formspree.io/f/mwkzkbqo",
    },
    plugins: [ 
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "bright-green",
        },
      },
    ],
  }