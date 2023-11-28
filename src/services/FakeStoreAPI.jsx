
let getCategories = async () => {
    let url = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    let data = await url.json();
    return data;
}

let getProducts = async () => {
    let url = await fetch(`https://fakestoreapi.com/products`);
    let data = await url.json();
    return data;
}

let getProductById = async (id) => {
    let url = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await url.json();
    return data;
}

export { getCategories, getProducts, getProductById };