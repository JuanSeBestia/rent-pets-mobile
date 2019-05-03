import { createReducer, createActions } from 'reduxsauce';
import { iAction } from '../d';

/* ------------- Types and Action Creators ------------- */
export interface iTypes {
  USER_REQUEST: string;
  USER_SUCCESS: string;
  USER_FAILURE: string;
  USER_FETCH: string;
}
export interface iCreators {
  userRequest: (payload: string) => AnyAction;
  userFetch: (payload: string) => AnyAction;
  userSuccess: (payload: any) => AnyAction;
  userFailure: (payload: string) => AnyAction;
}
const { Types, Creators } = createActions<iTypes, iCreators>(
  {
    userRequest: ['payload'],
    userFetch: ['payload'],
    userSuccess: ['payload'],
    userFailure: ['payload'],
  },
  { prefix: '@Pets/User/' },
);

export const UserTypes = Types;
const UserCreators = Creators;
export default UserCreators;

/* ------------- Initial State ------------- */
interface iState {
  userData: any;
  fetching: boolean;
  error: string;
  username: string | undefined;
}

export const INITIAL_STATE: iState = {
  userData: undefined,
  fetching: false,
  error: '',
  username: '',
};

/* ------------- Selectors ------------- */

export const UserDataSelectors = {
  selectAvatar: (state: { user: iState }) => state.user.userData,
};

/* ------------- Reducers ------------- */

// request the userdata for a user
export const request = (
  state: iState,
  { payload }: iAction<string>,
): iState => ({
  ...state,
  fetching: true,
  username: payload,
});

// successful userdata lookup
export const success = (state: iState, { payload }: iAction<any>): iState => ({
  ...state,
  fetching: false,
  userData: payload,
  error: '',
});

// failed to get the userData
export const failure = (
  state: iState,
  { payload }: iAction<string>,
): iState => ({
  ...state,
  fetching: false,
  error: payload || '',
});

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});

export const UserReducer = reducer;

/* ------------- Sagas ------------- */

import api from '../../util/api/axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

export function* fetchUserData(action: iAction<string>) {
  try {
    yield put(Creators.userRequest(action.payload));
    const userData = yield call(api.user.request, action.payload);
    yield put(Creators.userSuccess(userData));
  } catch (error) {
    console.log('fetchPetsSaga:error', error);
    yield put(Creators.userFailure(error.message));
  }
}

export function* userSaga() {
  yield takeLatest(Types.USER_FETCH, fetchUserData);
}
