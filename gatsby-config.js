module.exports = {
  siteMetadata: {
    title: `Gewerbe-Seite`,
    fullTitle: `Gewerbe Seite`,
    description: `Fotografie | Webseite | Planung`,
    about: `Schaufenster - Gewerbe-Seiten Template`,
    email: `info@gewerbe-seiten.ch`,
    social: {
      facebook: `https://facebook.com/`,
      twitter: `https://twitter.com/`,
      instagram: `https://instagram.com/`,
      linkedin: `https://linkedin.com/in/`,
    },
    contact: {
      mobile: `(+41) 79 201 68 03`,
      telephone: `(+41) 79 201 68 03`,
    },
    address: `Zürich - Schweiz`,
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86456.59681310692!2d8.466675066875197!3d47.3774336689763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2zWsO8cmljaA!5e0!3m2!1sen!2sch!4v1600864369975!5m2!1sen!2sch`,
    opening: {
      day: `Montag - Freitag`,
      hour: `8:00 - 18:00`,
    },
    careers: {
      title: `Benefits and rewards`,
      about: `Our diverse capabilities `,
      benefits: [
        `Healthcare and wellness benefits`,
        `Retirement and financial protection`,
        
      ],
    },

    author: {
      name: `Ray`,
      position: `Web Design`,
      email: `info@gewerbe-seiten.ch`,
      contact: `079 201 68 03`,
      website: `https://gewerbe-seiten.ch`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-webseite-gewerbe-seite`,
        short_name: `gewerbe-seite`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, 
        display: `minimal-ui`,
        icon: `src/images/logo_generic.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
