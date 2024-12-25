document.querySelector('.search-container button').addEventListener('click', () => {
    const searchValue = document.querySelector('.search-container input').value.toLowerCase();
    const shops = document.querySelectorAll('.shop');

    shops.forEach((shop) => {
        const shopName = shop.getAttribute('data-name').toLowerCase();
        if (shopName.includes(searchValue)) {
            shop.classList.remove('dis-none')
        } else {
            shop.classList.add('dis-none');
        }
    });
});

document.querySelector('.search-container input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.search-container button').click();
    }
});