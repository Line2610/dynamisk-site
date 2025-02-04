const listContainer = document.querySelector("main");

fetch(`https://Kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="product_cart">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.basecolour}" />
          <h3>${product.productdisplayname}</h3>
          <p>Price:${product.price}</p>
          <a href="produkt.html">Read more</a>
        </div>`;
    })
    .join("");
  listContainer.innerHTML = markup;
}
