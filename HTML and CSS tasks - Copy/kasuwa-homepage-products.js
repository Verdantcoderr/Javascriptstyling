let $showProductsButton = document.getElementById('see-more');

$showProductsButton.addEventListener('click', displayProducts);

let products = [
    {
        name: 'Green vegetable',
        image_url: './css/images/sm1.jpg',
        price: 'N 5,000'
    },
    {
        name: 'Green pepper',
        image_url: './css/images/sm2.jpeg',
        price: 'N 3,000'
    },
    {
        name: 'Cattle',
        image_url: './css/images/sm3.jpg',
        price: 'N 103,000'
    }
];

let productsDisplayed = false;
function displayProducts(){
    if (productsDisplayed) {
        return;
    }
    let $productList = document.getElementById('product-reveal');
    let productsContent = '';
    products.forEach(function (product) {
        let productContent=`
        <div class="new-in__items" id="product-reveal">
            <div href="" class="new-in__item">
                <div class="new-in__item--img">
                    <img src="${product.image_url}" alt="Berries">
                </div>
                <div class="new-in__item--label">
                    <span class="new-in__item--label--name">${product.name}</span>
                    <span class="new-in__item--label--price">${product.price}</span>
                </div>
            </div>
        </div>`;
        productsContent = productsContent + productContent;
    });

    $productList.innerHTML = productsContent;

    productsDisplayed = true;
}