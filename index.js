const seasonsContainer = document.querySelector(".seasons_list_container");

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((response) => response.json())
  .then((data) => showCategori(data));

function showCategori(seasons) {
  console.log(seasons);
  const markup = seasons
    .map(
      (element) =>
        `<div class="box">
          <a href="produktliste.html?season=${element.season}">${element.season}</a>
        </div>`
    )
    .join("");

  seasonsContainer.innerHTML = markup;
}
