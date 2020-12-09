import { put } from 'redux-saga/effects';
const API_KEY = '&Subscription-Key=c455d00cb0f64e238a5282d75921f27e';

export function* fetchCategories() {
    const json = yield fetch('https://api.wegmans.io/products/categories?api-version=2018-10-18' + API_KEY)
        .then(response => response.json());
    yield put({ type: "CATEGORIES_RECEIVED", json });
}

export function* fetchSubcategory(data){
    const json = yield fetch('https://api.wegmans.io' + data.url  + API_KEY)
        .then(response => response.json());
    yield put({ type: "SUBCATEGORY_RECEIVED", json });
}
