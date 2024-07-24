document.addEventListener('DOMContentLoaded', () => {
    const orderCountElement = document.getElementById('order-count');
    
    // Fetch order count from local storage
    const orderCount = localStorage.getItem('orderCount') || 0;

    // Display the order count
    orderCountElement.textContent = orderCount;
});
