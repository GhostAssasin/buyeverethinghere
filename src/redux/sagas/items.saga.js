import { put } from 'redux-saga/effects';
import { call} from "@redux-saga/core/effects";
import {fetchItemsAX} from "../../api/libs";
const API_KEY = '&Subscription-Key=c455d00cb0f64e238a5282d75921f27e';



export function* fetchItems(payload) {
    const json = yield call(fetchItemsAX, payload.id);
    yield put({ type: "ITEMS_RECEIVED", items: json });
}

export function* fetchItem(payload){
    const json = yield fetch('https://api.wegmans.io' + payload.id +  API_KEY)
        .then(response => response.json());
     put({ type: "ITEM_RECEIVED", json })
}



