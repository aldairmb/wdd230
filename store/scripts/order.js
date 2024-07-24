document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    const productIdInput = document.getElementById('product-id');
    const productDetailsContainer = document.getElementById('product-details');
    
    if (productId) {
        fetch('data/products.json')
            .then(response => response.json())
            .then(data => {
                const product = data.find(p => p["Product Identifier"] === productId);
                if (product) {
                    const productSection = document.createElement('section');
                    productSection.classList.add('product');

                    const productImage = document.createElement('div');
                    productImage.classList.add('product-item');
                    productImage.innerHTML = `<img src="${product["Product Image URL"]}" alt="${product["Product Name"]}">`;

                    const productName = document.createElement('p');
                    productName.classList.add('product-name');
                    productName.textContent = product["Product Name"];

                    const productDescription = document.createElement('p');
                    productDescription.classList.add('product-description');
                    productDescription.textContent = product["Product Description"];

                    const productPrice = document.createElement('p');
                    productPrice.classList.add('product-price');
                    productPrice.textContent = `Price: ${product["Product Price"]}`;

                    const taxAmount = (parseFloat(product["Product Price"].replace('$', '')) * 0.05).toFixed(2);
                    const totalPrice = (parseFloat(product["Product Price"].replace('$', '')) + parseFloat(taxAmount)).toFixed(2);

                    const priceDetails = document.createElement('p');
                    priceDetails.classList.add('price-details');
                    priceDetails.innerHTML = `Sales Tax (5%): $${taxAmount}<br>Total Price: $${totalPrice}`;

                    productSection.appendChild(productImage);
                    productSection.appendChild(productName);
                    productSection.appendChild(productDescription);
                    productSection.appendChild(productPrice);
                    productSection.appendChild(priceDetails);

                    productDetailsContainer.appendChild(productSection);

                    productIdInput.value = productId;
                } else {
                    console.error('Product not found');
                }
            })
            .catch(error => console.error('Error fetching the products:', error));
    } else {
        console.error('No product ID found in URL');
    }

    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Fetch existing order count from local storage
        let orderCount = localStorage.getItem('orderCount') || 0;
        orderCount = parseInt(orderCount, 10);

        // Increment the order count
        orderCount += 1;

        // Update local storage with new order count
        localStorage.setItem('orderCount', orderCount);

        // Redirect to confirmation page with form data
        const formData = new FormData(orderForm);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `confirmation.html?${queryString}`;
    });
});
