// cardapio.js
import { getProducts } from './products.js';

document.addEventListener('DOMContentLoaded', async () => {
  const products = await getProducts();
  const grid = document.querySelector('.grid');
  console.log("Produtos:", products);
  
  grid.innerHTML = products.map(product => `
    <div class="card">
      <img src="${product.image || 'assets/pizza-placeholder.png'}" alt="${product.name}">
      <div class="card-text">
        <span class="card-title">${product.name}</span>
        <p class="card-description">${product.description || ''}</p>
        <div class="card-info">
          <p class="card-price">R$ ${product.price.toFixed(2)}</p>
          <button class="add-to-cart-btn" data-id="${product.id}">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
});