// array of object
const products = [
    { name: 'laptop', price: 46000, brand: 'MSI', color: 'black' },
    { name: 'phone', price: 35000, brand: 'realme', color: 'gray' },
    { name: 'watch', price: 2500, brand: 'haylue', color: 'black' },
    { name: 'headphone', price: 900, brand: 'havit', color: 'black' },
    { name: 'keyboard', price: 1800, brand: 'logitech', color: 'gray' },
];
// ======== map =========
const brands = products.map(product => product.brand);
// console.log('brands -- ', brands);
const prices = products.map(product => product.price);
// console.log('prices -- ', prices);

// ======= forEach ===========
products.forEach(product => {
    console.log('product -- ', product.name);
});

//======== filter ==============
const cheapPrices = products.filter(product => {
    return product.price <= 5000;
})
console.log('cheapPrices -- ', cheapPrices);
//--------
const specificName = products.filter(product => product.name.includes('n'));
console.log('specificName -- ', specificName);


//========= find ==============
const special = products.find(product => product.name.includes('e'));
console.log('special -- ', special);
