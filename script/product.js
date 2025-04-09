document.addEventListener('DOMContentLoaded', () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const tableBody = document.querySelector('#productsTable tbody');
  
    // Renderiza produtos
    function renderProducts() {
      tableBody.innerHTML = products.map(product => `
        <tr>
          <td>${product.name}</td>
          <td>R$ ${product.price.toFixed(2)}</td>
          <td>
            <button class="edit" data-id="${product.id}">Editar</button>
            <button class="delete" data-id="${product.id}">Excluir</button>
          </td>
        </tr>
      `).join('');
    }
  
    // Adiciona listeners
    document.getElementById('addProduct').addEventListener('click', () => {
      const name = prompt('Nome do produto:');
      const price = parseFloat(prompt('Preço:'));
      if (name && price) {
        products.push({ id: Date.now(), name, price });
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
      }
    });
  
    // Delegation para editar/excluir
    tableBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const id = parseInt(e.target.dataset.id);
        const index = products.findIndex(p => p.id === id);
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
      }
    });
  
    renderProducts();
  });