const productId = 1165;
const productContainer = document.querySelector(".produkt_container");

fetch(`https://Kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = `
      <div class="produkt_billede">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.basecolour}" />
      </div>
      <div class="produkt_tekst">
        <div class="produkt_purchase">
          <h2>${data.productdisplayname}</h2>
          <p>${data.price} kr</p>
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
}
