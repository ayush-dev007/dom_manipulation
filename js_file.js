let products = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && !isNaN(price) && !isNaN(rating) && rating >= 0 && rating <= 5) {
        products.push({ name, price, rating });
        updateGraphs();
    } else {
        alert("Please enter valid inputs (Rating between 0 and 5)");
    }

    // Clear input fields
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';
}

function updateGraphs() {
    const priceGraph = document.getElementById('priceGraph');
    const ratingGraph = document.getElementById('ratingGraph');

    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        // Price Bar
        const priceBar = document.createElement('div');
        priceBar.classList.add('bar', 'price-bar');
        priceBar.style.width = product.price * 10 + 'px';
        priceBar.textContent = `${product.name} - $${product.price}`;
        priceGraph.appendChild(priceBar);

        // Rating Bar
        const ratingBar = document.createElement('div');
        ratingBar.classList.add('bar', 'rating-bar');
        ratingBar.style.width = product.rating * 50 + 'px';
        ratingBar.textContent = `${product.name} - ${product.rating} Stars`;
        ratingGraph.appendChild(ratingBar);
    });
}

function sortGraph(type) {
    if (type === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (type === 'rating') {
        products.sort((a, b) => a.rating - b.rating);
    }
    updateGraphs();
}
