

const add = (item) => {
    const inputField = document.getElementById(item);
    const inputValue = inputField.value;
    console.log(inputValue);
    if (!inputValue) {
        return;
    }

    inputField.value = '';
}
const Name = () => {
    const productName = document.getElementById('product-name-field');
    add(productName)
}
const Price = () => {
    const productPrice = document.getElementById('product-price-field');
    add(productPrice)
}