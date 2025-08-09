// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-was-awarded-the-national-science-foundation-graduate-research-fellowship-nsf-grfp-to-pursue-my-research-at-mit",
          title: 'I was awarded the National Science Foundation Graduate Research Fellowship (NSF GRFP) to...',
          description: "",
          section: "News",},{id: "news-i-started-my-internship-at-bristol-myers-squibb-as-a-machine-learning-intern-working-on-applying-and-developing-models-for-drug-discovery",
          title: 'I started my internship at Bristol Myers Squibb as a machine learning intern,...',
          description: "",
          section: "News",},{id: "projects-catalytic-micro-combustion",
          title: 'catalytic micro-combustion',
          description: "driving desorption in atmospheric water harvesters with energy-dense, autothermal combustion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-adsorption-property-prediction-for-co2-adsorption-in-metal-organic-frameworks-mofs",
          title: 'adsorption property prediction for CO2 adsorption in metal-organic frameworks (MOFs)',
          description: "using IsothermNet and [dummy]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-catalytic-micro-combustion",
          title: 'catalytic micro-combustion',
          description: "driving desorption in atmospheric water harvesters with energy-dense, autothermal combustion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
