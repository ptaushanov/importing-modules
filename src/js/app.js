import "../scss/app.scss";
const R = require('ramda');

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  const classes = R.pluck("class", arrayToPluck);

  articles.forEach((article, index) => {
    article.classList.add(classes[index]);
  })
});
