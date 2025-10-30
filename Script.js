const products = [
  { name: "خواتم ", price: 120, img: "https://via.placeholder.com/200" },
  { name: "اساور ", price: 90, img: "https://via.placeholder.com/200" },
  { name: "سنسال", price: 150, img: "https://via.placeholder.com/200" }
];

const container = document.getElementById('products');

function renderProducts() {
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} درهم</p>
      <button>أضف إلى السلة</button>
    `;
    container.appendChild(div);
  });
}

function scrollToProducts() {
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

renderProducts();