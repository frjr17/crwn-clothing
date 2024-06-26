import { all, call, put, takeLatest } from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./types";
import { getCategoriesAndDocuments } from "../../utils/firebase";
import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./actions";


export function* fetchCategoriesAsync() {
    try {
        const categories = yield call(getCategoriesAndDocuments)
        yield put(fetchCategoriesSuccess(categories));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}


export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([
        call(onFetchCategories)
    ])
}