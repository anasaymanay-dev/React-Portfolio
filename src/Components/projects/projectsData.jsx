import recipeImg from "../assets/recipe-search-project.jpeg";
import dashboardImg from "../assets/Dashboard.jpeg";
import portfolioImg from "../assets/portfolio.jpeg";
import todoImg from "../assets/to-do-list.jpeg";
import fruitImg from "../assets/fruit-shop.jpeg";
import upflowImg from "../assets/up-flow.jpeg";
import crudsImg from "../assets/cruds.jpeg";

export const projectsData = [
  {
    title: "Recipe Search App",
    description:
      "A meal search application with recipes, ingredients, and interactive food browsing.",
    icon: <i className="fa-solid fa-utensils"></i>,
    image: recipeImg,
    skills: ["HTML", "CSS", "JS"],
    liveDemo: "https://anasaymanay-dev.github.io/recipe-search-app/",
    repoLink: "https://github.com/anasaymanay-dev/recipe-search-app",
    search: "js",
  },

  {
    title: "Dashboard",
    description:
      "A responsive dashboard featuring analytics, statistics cards, charts, and organized layouts.",
    icon: <i className="fa-solid fa-chart-line"></i>,
    image: dashboardImg,
    skills: ["HTML", "CSS"],
    liveDemo: "https://anasaymanay-dev.github.io/templete-4/",
    repoLink: "https://github.com/anasaymanay-dev/templete-4",
    search: "static",
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website with responsive layouts and smooth interactive experiences.",
    icon: <i className="fa-solid fa-user"></i>,
    image: portfolioImg,
    skills: ["React", "CSS"],
    liveDemo: "https://react-portfolio-flax-alpha.vercel.app/",
    repoLink: "https://github.com/anasaymanay-dev/React-Portfolio",
    search: "react",
  },

  {
    title: "To Do App",
    description:
      "A task management application with filtering, tracking, and completion status features.",
    icon: <i className="fa-solid fa-list-check"></i>,
    image: todoImg,
    skills: ["React", "CSS"],
    liveDemo: "https://react-todo-app-zeta-red.vercel.app/",
    repoLink: "https://github.com/anasaymanay-dev/react-todo-app",
    search: "react",
  },

  {
    title: "Fruit Shop Website",
    description:
      "A responsive fruit shop website with clean layouts and modern interfaces.",
    icon: <i className="fa-solid fa-apple-whole"></i>,
    image: fruitImg,
    skills: ["HTML", "CSS"],
    liveDemo: "https://anasaymanay-dev.github.io/fruit-shop-website/",
    repoLink: "https://github.com/anasaymanay-dev/fruit-shop-website",
    search: "static",
  },

  {
    title: "Up Flow",
    description:
      "A business landing website with modern sections and responsive user experiences.",
    icon: <i className="fa-solid fa-arrow-trend-up"></i>,
    image: upflowImg,
    skills: ["HTML", "CSS"],
    liveDemo: "https://anasaymanay-dev.github.io/up-flow/",
    repoLink: "https://github.com/anasaymanay-dev/up-flow",
    search: "static",
  },

  {
    title: "CRUDS",
    description:
      "A product management application with search, totals, and CRUD functionality features.",
    icon: <i className="fa-solid fa-database"></i>,
    image: crudsImg,
    skills: ["HTML", "CSS", "JS"],
    liveDemo: "https://anasaymanay-dev.github.io/CRUDS/",
    repoLink: "https://github.com/anasaymanay-dev/CRUDS/tree/master",
    search: "js",
  },
];
