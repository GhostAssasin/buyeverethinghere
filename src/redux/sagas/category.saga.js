import { call, put } from 'redux-saga/effects';
import {fetchCategoriesAX, fetchSubcategoryAX} from "../../api/libs";

export function* fetchCategories() {
    const json = yield call(fetchCategoriesAX);
     if (json.error) {
        yield put({ type: "CATEGORIES_REJECTED", json });
     } else {
         yield put({ type: "CATEGORIES_RECEIVED", json });
     }


}

export function* fetchSubcategory(payload){
    const json = yield call(fetchSubcategoryAX, payload.url);
    if (json.error) {
        yield put({ type: "SUBCATEGORY_REJECTED", json });
    } else {
        yield put({ type: "SUBCATEGORY_RECEIVED", json });
    }



}
