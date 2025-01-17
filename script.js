const arr = [
    { id: 0, name: 'Phone', price: '100 AZN' },
    { id: 1, name: 'Computer', price: '200 AZN' },
    { id: 2, name: 'Tablet', price: '150 AZN' },
    { id: 3, name: 'Headphones', price: '50 AZN' },
    { id: 4, name: 'Smartwatch', price: '300 AZN' },
    { id: 5, name: 'TV', price: '500 AZN' },
    { id: 6, name: 'Camera', price: '400 AZN' },
    { id: 7, name: 'Printer', price: '250 AZN' },
    { id: 8, name: 'Monitor', price: '350 AZN' },
    { id: 9, name: 'Keyboard', price: '70 AZN' },
    { id: 10, name: 'Mouse', price: '40 AZN' },
    { id: 11, name: 'Router', price: '60 AZN' },
  ];
  
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Qiymət: ${product.price}</p>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  displayProducts(arr);
  
  document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const filteredProducts = arr.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '🌞' : '🌙';
  });
  