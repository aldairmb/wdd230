// scripts/bestSellers.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            const bestSellersContainer = document.getElementById('best-sellers');

            data.forEach(product => {
                if (product["Featured Product"]) {
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

                    const seeMoreButton = document.createElement('a');
                    seeMoreButton.classList.add('see-more');
                    seeMoreButton.href = `products.html?product=${product["Product Identifier"]}`;
                    seeMoreButton.textContent = 'See More';

                    productSection.appendChild(productImage);
                    productSection.appendChild(productPrice);
                    productSection.appendChild(productName);
                    productSection.appendChild(productDescription);
                    productSection.appendChild(seeMoreButton);

                    // Append to best sellers container
                    if (bestSellersContainer) {
                        bestSellersContainer.appendChild(productSection);
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
