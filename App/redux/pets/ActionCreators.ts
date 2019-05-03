import * as ActionTypes from './ActionTypes';
import { iPet } from '../../util/models/pets';
import { iAction } from '../d';

export const fetchPets = (): iAction<null> => ({
  type: ActionTypes.PETS_FETCH,
});

export const petsLoading = (): iAction<null> => ({
  type: ActionTypes.PETS_LOADING,
});

export const petsFailed = (errorMessage: string): iAction<string> => ({
  type: ActionTypes.PETS_FAILED,
  payload: errorMessage,
});

export const addPets = (pets: iPet): iAction<iPet> => ({
  type: ActionTypes.PETS_ADD,
  payload: pets,
});
