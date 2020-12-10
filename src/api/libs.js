import API from './Api'
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export async function fetchCategoriesAX() {
    const url = `${API_URL}/products/categories?api-version=2018-10-18${API_KEY}`;

    return await API.get(url).then(response => {
        return response.data;
    }).catch(err => ({ error: err }))
}

export async function fetchSubcategoryAX(payload) {
    const url = `${API_URL + payload + API_KEY}`;
    return await API.get(url).then(response => {
        return response.data;
    }).catch(err => ({ error: err }))
}

export async function fetchItemsAX(payload) {
    let url2, items = [];
    let products =[];
    const url = `${API_URL}/products/categories/${payload}?api-version=2018-10-18${API_KEY}`
    await API.get(url).then(response => {
        (response.data.products[0] !== undefined )?
            products = response.data.products :
            url2 = API_URL + response.data.categories[0]._links[0].href + API_KEY;
    }).catch(err => ({ error: err }));
    if (products[0] === undefined) await API.get(url2).then(response => {
        products = response.data.products;
    }).catch(err => ({ error: err }))

    products.map((item, index) => {
        let price= Math.random()*100;
        (price > 10)? price/= 8 : price+= 0.5
        let rating = Math.random()*10;
        (rating > 5)? rating/= 2 : rating+=  0.001;
        if(index < 15) items.push({name: item.name, sku: item.sku, href: item._links[0].href, imgUrl: '', rating: rating.toFixed(2), price: price.toFixed(2)});
        return null;
    })
    return items;
}

