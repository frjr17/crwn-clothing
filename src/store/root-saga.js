import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./category/saga";
import { userSaga } from "./user/saga";

export default function* rootSaga() {
    yield all([
        call(categoriesSaga),
        call(userSaga)
    ])
}