import { put, takeLatest, all } from 'redux-saga/effects';
const API_KEY = '&Subscription-Key=c455d00cb0f64e238a5282d75921f27e';

function* fetchCategories() {    
    const json = yield fetch('https://api.wegmans.io/products/categories?api-version=2018-10-18' + API_KEY)
        .then(response => response.json());
    yield put({ type: "CATEGORIES_RECEIVED", json });
}

function* fetchSubcategory(url){
    const json = yield fetch('https://api.wegmans.io' + url + API_KEY)
        .then(response => response.json());
    yield put({ type: "SUBCATEGORY_RECEIVED", json });
}

function* actionWatcher() {
     yield takeLatest('GET_CATEGORIES', fetchCategories)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   fetchCategories(),

   ]);
}