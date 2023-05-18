// https://codesandbox.io/s/wandering-architecture-ncgje?fontsize=14&hidenavigation=1&theme=dark

import "./styles.css";

// https://jikan.moe/
// https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema

//fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=20`)

const appElement = document.getElementById("app");
const jsonResultElement = document.getElementById("json-result");

function loadList(page) {
  fetch(`https://api.jikan.moe/v3/top/anime/${page}`)
    .then(response => response.json())
    .then(data => {
      jsonResultElement.innerText = JSON.stringify(data, null, 2);
      const animeListElement = createAnimeList(data.top);
      appElement.appendChild(animeListElement);
    });
}

loadList(1);

function createAnimeList(animes) {
  return e("div", { class: "anime-list" }, animes.map(createAnimeCard));
}

function createAnimeCard(anime) {
  return e("div", { class: "card-container" }, [
    e("img", { src: anime.image_url }),
    e("div", { class: "card-description" }, [
      e("div", { class: "anime-ranking" }, [
        e("div", {}, `#${anime.rank}`),
        e("div", {}, `${anime.score}★`),
        e("div", {}, `ep: ${anime.episodes}`)
      ]),
      e("div", { class: "anime-title" }, anime.title),
      e("div", { class: "anime-duration" }, [
        e("div", {}, anime.start_date),
        e("div", {}, anime.end_date)
      ])
    ])
  ]);
}

function e(tag, attributes, children) {
  const element = document.createElement(tag);
  Object.keys(attributes).forEach(attributeName => {
    element.setAttribute(attributeName, attributes[attributeName]);
  });
  if (children instanceof Array) {
    children.forEach(child => {
      element.appendChild(child);
    });
  } else if (typeof children === "string") {
    element.innerText = children;
  }
  return element;
}
