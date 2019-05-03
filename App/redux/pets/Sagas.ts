import api from '../../util/api/axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionCreators from './ActionCreators';
import * as ActionTypes from './ActionTypes';

export function* fetchPetsSaga() {
  try {
    yield put(ActionCreators.petsLoading());
    const pets = yield call(api.pets.fecthAll);
    yield put(ActionCreators.addPets(pets));
  } catch (error) {
    console.log('fetchPetsSaga:error', error);
    yield put(ActionCreators.petsFailed(error.message));
  }
}

export default function* petsSaga() {
  yield takeLatest(ActionTypes.PETS_FETCH, fetchPetsSaga);
}
