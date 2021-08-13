const products = [
    { name: 'samsung s3 phone', price: 12000},
    { name: 'asus laptop d34', price: 32000},
    { name: 'apple smart watch', price: 18000},
    { name: 'lg smart phone', price: 10000},
    { name: 'bosundara binding paper', price: 80},
    { name: 'old granny land phone', price: 100},
]

function searchProducts(products, searchText){
    const matched = [];
    for(const product of products){
        const name = product.name;
        if(name.indexOf('p') != -1){
            console.log(name);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'phone');
console.log(matched);