// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const projects = [
  {
    name: "awesome project",
    number: 101,
    type: "planned"
  },
  {
    name: "reall cool project",
    number: 102,
    type: "historical"
  },
  {
    name: "great project",
    number: 103,
    type: "planned"
  },
  {
    name: "lederhosen project",
    number: 104,
    type: "current"
  },
  {
    name: "german project",
    number: 105,
    type: "historical"
  },
  {
    name: "strange project",
    number: 106,
    type: "planned"
  }
];

const projectsByType = (projects, type) =>
  projects.filter(project => project.type === type);

const historical = projectsByType(projects, "historical");
const current = projectsByType(projects, "current");
const planned = projectsByType(projects, "planned");
