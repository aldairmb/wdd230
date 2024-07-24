document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    document.querySelector('#product-id').textContent = urlParams.get('product-id');
    document.querySelector('#name').textContent = urlParams.get('name');
    document.querySelector('#email').textContent = urlParams.get('email');
    document.querySelector('#phone').textContent = urlParams.get('phone');
    document.querySelector('#address').textContent = urlParams.get('address');
    document.querySelector('#city').textContent = urlParams.get('city');
    document.querySelector('#state').textContent = urlParams.get('state');
    document.querySelector('#zip').textContent = urlParams.get('zip');
    document.querySelector('#message').textContent = urlParams.get('message');
});

