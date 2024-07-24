// scripts/products.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');

            data.forEach(product => {
                const productSection = document.createElement('section');
                productSection.classList.add('product');

                const productImage = document.createElement('div');
                productImage.classList.add('item');
                productImage.innerHTML = `<img src="${product["Product Image URL"]}" alt="${product["Product Name"]}">`;

                const productName = document.createElement('p');
                productName.classList.add('product-name');
                productName.textContent = product["Product Name"];

                const productDescription = document.createElement('p');
                productDescription.classList.add('product-description');
                productDescription.textContent = product["Product Description"];

                const productPrice = document.createElement('p');
                productPrice.classList.add('product-price');
                productPrice.textContent = product["Product Price"];

                const orderButton = document.createElement('a');
                orderButton.classList.add('order-now');
                orderButton.href = `order.html?product=${product["Product Identifier"]}`;
                orderButton.textContent = 'Order Now';

                productSection.appendChild(productImage);
                productSection.appendChild(productName);
                productSection.appendChild(productDescription);
                productSection.appendChild(productPrice);
                productSection.appendChild(orderButton);

                // Append to products container
                if (productsContainer) {
                    productsContainer.appendChild(productSection);
                }
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
