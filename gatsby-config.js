module.exports = {
    siteMetadata: {
      description: "Personal site of Jiayun Fang",
      locale: "en",
      title: "Jiayun Fang",
      formspreeEndpoint: "https://formspree.io/f/mwkzkbqo",
    },
    plugins: [
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