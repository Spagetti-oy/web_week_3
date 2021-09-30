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
  document.getElementById("app").innerHTML =
    "<h1>Hello! Welcome to the doggo wiki!</h1>";

  let dogList = ["shiba", "pomeranian", "dachshund", "husky", "dingo"];

  dogList.forEach(addWikiItem);

  /*let i = 0;
  while (i < 5) {
    addWikiItem();
    i++;
  }*/
}
/*
async function loadImage() {
  fetch("https://dog.ceo/api/breed/hound/images/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result.message);
      //let link = result.message;
      return result.message;
    });
*/
/*let url = "https://dog.ceo/api/breed/hound/images/random";
  let response = await fetch(url);

  let image = await response.json();
}*/

async function addWikiItem(dogBreed) {
  const container = document.getElementById("container");

  let wikiItem = document.createElement("div");
  wikiItem.setAttribute("class", "wiki-item");
  //wikiItem.setAttribute("id", "wiki-item");
  //wikiItem.innerHTML = "yeeyeyey";

  let wikiHeader = document.createElement("h1");
  wikiHeader.setAttribute("class", "wiki-header");
  wikiHeader.innerHTML = dogBreed;

  let wikiContent = document.createElement("div");
  wikiContent.setAttribute("class", "wiki-content");

  let wikiText = document.createElement("p");
  wikiText.setAttribute("class", "wiki-text");
  wikiText.innerHTML =
    "Shiba on pienikokoinen, voimakasrakenteinen ja tasapainoinen pystykorva. Koiran rotumääritelmän mukaan sallittu säkäkorkeus on uroksilla 40 cm ja nartuilla 37 cm; sallittu poikkeama on 1,5 senttimetriä. Häntä on korkealle kiinnittynyt, paksu ja asennoltaan sirpinmuotoisesti kaartuva tai terhakasti rullalle kiertyvä, silmät suhteellisen pienet ja ulkokulmistaan yläviistoon kääntyvät.";

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

  //wikiImg.src = await loadImage();
  //console.log(wikiImg.src);

  imgContainer.appendChild(wikiImg);
  wikiContent.appendChild(imgContainer);
  wikiContent.appendChild(wikiText);

  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);
  container.appendChild(wikiItem);

  console.log("lisää item loppu");
}
