import React, { Component } from 'react';
import { iPet } from '../../util/models/pets';
import { connect } from 'react-redux';
import { iStatePets } from '../../redux/pets/Reducers';
import * as PetsActionsCreators from '../../redux/pets/ActionCreators';
import { bindActionCreators, Dispatch } from 'redux';
import { iAction } from '../../redux/d';
import { PetItem } from './PetItem';

interface iPropsState extends iStatePets {}
const mapStateToProps = (state: { pets: iStatePets }): iPropsState => {
  return {
    ...state.pets,
  };
};

interface iPropsDispatch {
  fetchPets: () => iAction<null>;
  petsLoading: () => iAction<null>;
  petsFailed: (errorMessage: string) => iAction<string>;
  addPets: (pets: iPet[]) => iAction<iPet[]>;
}
const mapDispatchToProps = (dispatch: Dispatch): iPropsDispatch => ({
  ...bindActionCreators(PetsActionsCreators, dispatch),
});

interface Props extends iPropsState, iPropsDispatch {}
export class ListPets extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchPets();
  }
  render() {
    return this.props.pets.map(pet => <PetItem key={pet.id} pet={pet} />);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPets);
