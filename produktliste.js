const mySeason = new URLSearchParams(window.location.search).get("season");
const productContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h1");

overskrift.innerHTML = mySeason;
console.log("Henter data for sæson:", mySeason);

fetch(`https://kea-alt-del.dk/t7/api/products/?season=${mySeason}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("products er ", products);

  let markup = "";
  markup = products
    .map(
      (product) =>
        `<div class="product_cart">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.basecolour}" />
          </a>
          <h3>${product.productdisplayname}</h3>
          <p>Price: ${product.price} kr</p>
          <p class="tilbud_liste ${product.discount && "isOnSale"}">-${product.discount}%</p>
        <p class="udsolgt ${product.soldout && "soldOut"}">Udsolgt</p>
          <a href="produkt.html?productid=${product.id}">Read more</a>
        </div>`
    )
    .join("");

  productContainer.innerHTML = markup;
}
