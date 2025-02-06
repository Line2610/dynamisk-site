const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("productid");

const productContainer = document.querySelector(".produkt_container");

console.log("Produkt container:", productContainer);

fetch(`https://Kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <div class="produkt_billede">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produkt billede" />
      </div>
      <div class="produkt_tekst">
        <div class="produkt_purchase">
          <h2>${data.productdisplayname}</h2>
          <p>${data.price} kr</p>
          <p class="tilbud_produkt ${data.discount && "isOnSale"}">-${data.discount}%</p>
          <p class="udsolgt_produkt ${data.soldout && "soldOut"}">Udsolgt</p>
          <label for="size">Choose a size</label>
          <select id="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <button class="basket">Add to basket</button>
        </div>
        <div class="produkt_info">
          <h2>${data.productdisplayname}</h2>
          <p>Model name<br />${data.articletype}</p>
          <p>Color<br />${data.basecolour}</p>
          <p>Inventory number<br />${data.id}</p>
        </div>
      </div>
    `;
  });
