let productId = 1165;
let productContainer = document.querySelector(".productContainer")
fetch(`https://Kea-alt-del.dk/t7/api/products/${productId}`)
.then(response => response.json())
.then(data => {
productContainer.innerHTML = `


${data.navn}


}