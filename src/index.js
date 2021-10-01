//Miikka Muinonen web_applications 30.9.2021

import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  /*document.getElementById("app").innerHTML =
    "<h1>Hello! Welcome to the doggo wiki!</h1>";*/

  let dogList = ["shiba", "pomeranian", "dachshund", "husky", "dingo"];

  dogList.forEach(addWikiItem);
}

async function addWikiItem(dogBreed) {
  const container = document.getElementById("container");

  let wikiItem = document.createElement("div");
  wikiItem.setAttribute("class", "wiki-item");

  let wikiHeader = document.createElement("h1");
  wikiHeader.setAttribute("class", "wiki-header");
  wikiHeader.innerHTML = dogBreed;

  let wikiContent = document.createElement("div");
  wikiContent.setAttribute("class", "wiki-content");

  let wikiText = document.createElement("p");
  wikiText.setAttribute("class", "wiki-text");

  let urlSummary =
    "https://en.wikipedia.org/api/rest_v1/page/summary/" + dogBreed;

  switch (dogBreed) {
    case "shiba":
      urlSummary =
        "https://en.wikipedia.org/api/rest_v1/page/summary/shiba_inu";
      break;
    case "pomeranian":
      urlSummary =
        "https://en.wikipedia.org/api/rest_v1/page/summary/pomeranian_dog";
      break;
    default:
  }

  fetch(urlSummary)
    .then((res) => res.json())
    .then((result) => {
      console.log(result.extract);
      wikiText.innerHTML = result.extract;
    });

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");

  let wikiImg = document.createElement("img");
  wikiImg.setAttribute("class", "wiki-img");

  let url = "https://dog.ceo/api/breed/" + dogBreed + "/images/random";

  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result.message);
      wikiImg.src = result.message;
    });

  imgContainer.appendChild(wikiImg);
  wikiContent.appendChild(imgContainer);
  wikiContent.appendChild(wikiText);

  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);
  container.appendChild(wikiItem);
}
