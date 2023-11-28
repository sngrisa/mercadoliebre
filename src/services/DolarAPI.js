let getDolarPrice = async() => {
    let url = await fetch(`https://dolarapi.com/v1/dolares`);
    let data = await url.json();
    return data;
};

export default getDolarPrice;