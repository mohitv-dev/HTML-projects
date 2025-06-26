// script.js
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}
function searchProduct() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const name = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}


function addToCart(itemName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;

  const li = document.createElement("li");
  li.innerText = itemName;
  li.style.padding = "5px";
  document.getElementById("cart-items").appendChild(li);
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");

  // Sab product cards ko bhi dark mode do
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.classList.toggle("dark-mode");
  });

  // Button text bhi change karo
  const btn = document.getElementById("darkBtn");
  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}