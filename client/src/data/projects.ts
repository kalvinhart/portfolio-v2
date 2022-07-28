import eShopImage from "../images/eshop.png";
import jobTrackerImage from "../images/jobtracker.png";
import shopCMSImage from "../images/shopcms.png";
import countriesImage from "../images/countries.png";
import photoSnapImage from "../images/photosnap.png";
import designoImage from "../images/designo.png";
import huddleImage from "../images/huddle.png";
import easybankImage from "../images/easybank.png";

export const projects = [
  {
    id: 1,
    title: "eCommerce Store",
    imageURL: eShopImage,
    liveURL: "https://mernestore.herokuapp.com/",
    gitHubURL: "https://github.com/kalvinhart/shop",
    description:
      "A full stack application with several features, such as searching, sorting and filtering products with paginated results, authentication, integration with Stripe to take customer payments, search suggestions and more.",
    tags: ["React", "TypeScript", "Node/Express", "MongoDB", "Styled Components"],
  },
  {
    id: 2,
    title: "eCommerce CMS",
    imageURL: shopCMSImage,
    liveURL: "",
    gitHubURL: "https://github.com/kalvinhart/shop-cms",
    description:
      "A full stack application with authentication for managing products and categories for my eCommerce store. This is a work-in-progress so a live version is currently unavailable.",
    tags: ["React", "TypeScript", "Node/Express", "MongoDB", "Material UI"],
  },
  {
    id: 3,
    title: "Job Application Tracker",
    imageURL: jobTrackerImage,
    liveURL: "https://job-tracker-olive.vercel.app/",
    gitHubURL: "https://github.com/kalvinhart/job-tracker",
    description:
      "A React desktop-only application with authentication to keep track of user's job applications. Data is persisted using Google Firebase. Data is presented using the react-table package.",
    tags: ["React", "TypeScript", "Firebase", "Styled Components"],
  },
  {
    id: 4,
    title: "REST Countries Application",
    imageURL: countriesImage,
    liveURL: "https://rest-countries-react-app.vercel.app/",
    gitHubURL: "https://github.com/kalvinhart/REST-Countries",
    description:
      "A React application based on a design from Frontend Mentor. It connects to the REST Countries API to display data about the countries of the world. It features searching and filtering results.",
    tags: ["React", "Class Components", "API", "CSS"],
  },
  {
    id: 4,
    title: "Designo Website",
    imageURL: designoImage,
    liveURL: "https://kalvinhart.github.io/FM-Designo/index.html",
    gitHubURL: "https://github.com/kalvinhart/FM-Designo",
    description:
      "A multi-page website based on a Frontend Mentor Figma design for a fictional business.",
    tags: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 5,
    title: "PhotoSnap Website",
    imageURL: photoSnapImage,
    liveURL: "https://kalvinhart.github.io/FM-Photosnap/index.html",
    gitHubURL: "https://github.com/kalvinhart/FM-Photosnap",
    description:
      "A multi-page website based on a Frontend Mentor Figma design for a fictional photography business.",
    tags: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Easybank Landing Page",
    imageURL: easybankImage,
    liveURL: "https://kalvinhart.github.io/FM-Easybank-Landing-Page/",
    gitHubURL: "https://github.com/kalvinhart/FM-Easybank-Landing-Page",
    description:
      "A landing page based on a Frontend Mentor Figma design for a fictional business.",
    tags: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Huddle Landing Page",
    imageURL: huddleImage,
    liveURL: "https://kalvinhart.github.io/FM-Huddle-Landing-Page/",
    gitHubURL: "https://github.com/kalvinhart/FM-Huddle-Landing-Page",
    description:
      "A landing page based on a Frontend Mentor Figma design for a fictional business.",
    tags: ["HTML", "SCSS"],
  },
];
