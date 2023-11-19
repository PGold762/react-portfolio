// Portfolio page
import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
        name: "CulturedCuisine",
        description: "FullStack Website",
        link: "https://culturedcuisine-59da43e6096e.herokuapp.com/",
        repo: "https://github.com/PGold762/CulturedCuisine",
        image: "cc",
      },
    {
      name: "MelodyMapper",
      description: "HTML/JS/CSS",
      link: "https://pgold762.github.io/MelodyMapper/",
      repo: "https://github.com/PGold762/MelodyMapper",
      image: "mm",
    },
    {
      name: "Password Generator",
      description: "HTML/JS/CSS",
      link: "https://pgold762.github.io/jsPasswordGenerator/",
      repo: "https://github.com/PGold762/jsPasswordGenerator",
      image: "pwg",
    },
    {
        name: "Workday Calendar",
        description: "HTML/JS/CSS",
        link: "https://pgold762.github.io/WorkDayCalendar/",
        repo: "https://github.com/PGold762/WorkDayCalendar",
        image: "wdc",
      },
      {
        name: "Weather Dashboard",
        description: "HTML/JS/CSS",
        link: "https://pgold762.github.io/WeatherDashboard/",
        repo: "https://github.com/PGold762/WeatherDashboard",
        image: "weather",
      },
      {
        name: "E-Commerce Site",
        description: "HTML/JS/CSS",
        link: "https://drive.google.com/file/d/1WF-4R0RiJvwtGvbSeG6mN6JMPFBnzQmX/view",
        repo: "https://github.com/PGold762/ecommerce-site",
        image: "ecs",
      },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
