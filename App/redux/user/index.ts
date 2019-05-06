import { createReducer, createActions } from 'reduxsauce';
import { iAction } from '../d';
import { NavigationService } from '../../util/navigator';

/* ------------- Types and Action Creators ------------- */
export interface iTypesUser {
  USER_REQUEST: string;
  USER_SUCCESS: string;
  USER_FAILURE: string;
  USER_FETCH: string;
  USER_UPDATE: string;
  LOGGOUT: string;
}
export interface iCreatorsUser {
  userRequest: (payload: string) => AnyAction;
  userFetch: (payload: string) => AnyAction;
  userSuccess: (payload: UserData) => AnyAction;
  userFailure: (payload: string) => AnyAction;
  userUpdate: (payload: UserData) => AnyAction;
  loggout: () => AnyAction;
}
const { Types, Creators } = createActions<iTypesUser, iCreatorsUser>(
  {
    userRequest: ['payload'],
    userFetch: ['payload'],
    userSuccess: ['payload'],
    userFailure: ['payload'],
    userUpdate: ['payload'],
    loggout: [],
  },
  { prefix: '@Pets/User/' },
);

export const UserTypes = Types;
const UserCreators = Creators;
export default UserCreators;

/* ------------- Initial State ------------- */
export interface iStateUser {
  userData?: UserData;
  fetching: boolean;
  error: string;
  username: string;
}

export const INITIAL_STATE: iStateUser = {
  userData: undefined,
  fetching: false,
  error: '',
  username: '',
};

/* ------------- Selectors ------------- */

export const UserDataSelectors = {
  selectAvatar: (state: { user: iStateUser }) => state.user.userData,
};

/* ------------- Reducers ------------- */

// request the userdata for a user
export const request = (
  state: iStateUser,
  { payload }: iAction<string>,
): iStateUser => ({
  ...state,
  fetching: true,
  username: payload,
});

// successful userdata lookup
export const success = (
  state: iStateUser,
  { payload }: iAction<any>,
): iStateUser => ({
  ...state,
  fetching: false,
  userData: payload,
  error: '',
});

// failed to get the userData
export const failure = (
  state: iStateUser,
  { payload }: iAction<string>,
): iStateUser => ({
  ...state,
  fetching: false,
  error: payload || '',
});

export const loggout = (state: iStateUser, {  }: iAction<any>): iStateUser => ({
  ...state,
  fetching: false,
  userData: undefined,
  error: '',
  username: '',
});

export const userUpdate = (
  state: iStateUser,
  {  }: iAction<any>,
): iStateUser => ({
  ...state,
  fetching: true,
  error: '',
});

/* ------------- Hookup Reducers To Types ------------- */
const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
  [Types.LOGGOUT]: loggout,
  [Types.USER_UPDATE]: userUpdate,
});

export const UserReducer = reducer;

/* ------------- Sagas ------------- */

import api from '../../util/api/axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { UserData } from '../../util/models/user';
import { Toast } from 'native-base';
import I18n from '../../I18n';
import { NavigationActions } from 'react-navigation';

export function* fetchUserData(action: iAction<string>) {
  try {
    yield put(Creators.userRequest(action.payload));
    const userData = yield call(api.user.request, action.payload);
    yield put(Creators.userSuccess(userData));
  } catch (error) {
    console.log('fetchUserData:error', error);
    yield put(Creators.userFailure(error.message));
  }
}

export function* userUpdateSaga(action: iAction<UserData>) {
  try {
    const userData = yield call(api.user.update, action.payload);
    yield put(Creators.userSuccess(userData));
    yield Toast.show({
      text: I18n.t('profileUpdated'),
      buttonText: 'X',
      type: 'success',
    });
    yield NavigationService.dispatch(
      NavigationActions.navigate({ routeName: 'Pets' }),
    );
  } catch (error) {
    console.log('userUpdateSaga:error', error);
    yield put(Creators.userFailure(error.message));
  }
}

export function* userSaga() {
  yield takeLatest(Types.USER_FETCH, fetchUserData);
  yield takeLatest(Types.USER_UPDATE, userUpdateSaga);
}
