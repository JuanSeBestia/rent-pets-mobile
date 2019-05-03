import * as ActionTypes from './ActionTypes';
import { iAction } from '../d';
import { iPet } from '../../util/models/pets';

export interface iStatePets {
  isLoading: boolean;
  errMess: string;
  pets: iPet[];
}
export const pets = (
  state = { isLoading: true, errMess: null, pets: [] },
  action: iAction<iPet | string>,
) => {
  switch (action.type) {
    case ActionTypes.PETS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        pets: action.payload,
      };

    case ActionTypes.PETS_LOADING:
      return { ...state, isLoading: true, errMess: null, pets: [] };

    case ActionTypes.PETS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
