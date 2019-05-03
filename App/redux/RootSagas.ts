import petsSaga from "./pets/Sagas";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        petsSaga(),
    ]);
}