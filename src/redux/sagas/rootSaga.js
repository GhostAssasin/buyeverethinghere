import { takeLatest, all } from 'redux-saga/effects';
import {fetchCategories} from  './category.saga';
import {fetchSubcategory} from  './category.saga';
import {fetchItem, fetchItems} from "./items.saga";


export default function* rootSaga() {
   yield all([
       yield takeLatest('GET_CATEGORIES', fetchCategories),
       yield takeLatest('GET_SUBCATEGORIES', fetchSubcategory),
       yield takeLatest('GET_ITEMS', fetchItems),
       yield takeLatest('GET_ITEM', fetchItem),

   ]);
}