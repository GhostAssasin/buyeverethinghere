import { put } from 'redux-saga/effects';
import {all, call} from "@redux-saga/core/effects";
const API_KEY = '&Subscription-Key=c455d00cb0f64e238a5282d75921f27e';



export function* fetchItems(payload) {
    const items =[];
    const json = yield fetch('https://api.wegmans.io/products/categories/' + payload.id + '?api-version=2018-10-18' + API_KEY)
        .then(response => response.json());
     console.log(json)
    if(json.categories[0] === undefined && json.products[0] !== undefined){
        json.products.map((item,index) => {
            items.push({name: item.name, sku: item.sku, href: item._links[0].href, subcategory: null});
            return null;
        })
    }
    if(json.categories[0] !== undefined && json.products[0] === undefined){
         yield all(json.categories.map((item) => {console.log(item); call(getSubItems, item._links[0].href)}));
    }

    yield put({ type: "ITEMS_RECEIVED", items });
    // console.log(items)
}

function* getSubItems(payload){
    console.log(payload);
    const data = yield fetch('https://api.wegmans.io' + payload +  API_KEY)
        .then(response => response.json());

}

export function* fetchItem(payload){
    const json = yield fetch('https://api.wegmans.io' + payload.id +  API_KEY)
        .then(response => response.json());
     put({ type: "ITEM_RECEIVED", json })
}



