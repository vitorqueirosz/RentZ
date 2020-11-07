/* eslint-disable no-case-declarations */

import { Car } from '../../../components/CarItem';
import { FavoriteAction, FavoriteState } from './types';

const INITIAL_STATE: FavoriteState = {
  error: false,
  favorites: [],
};

export default function reducer(state = INITIAL_STATE, action: FavoriteAction) {
  switch (action.type) {
    case '@favorites/ADD_TO_FAVORITES':
      let carFavorites: any = [];

      const { favoritedsCars, car } = action.payload;

      carFavorites = favoritedsCars;
      carFavorites.push(car);

      return {
        ...state,
        favorites: carFavorites,
      };

    case '@favorites/REMOVE_TO_FAVORITES':
      let allFavorites: any = [];

      const allFavoriteds = action.payload.favoritedsCars;
      const selectedCar = action.payload.car;

      allFavorites = allFavoriteds;
      const carFavorited = allFavorites.findIndex(
        (c: Car) => c.id === selectedCar.id,
      );

      allFavorites.splice(carFavorited, 1);

      return {
        ...state,
        favorites: allFavorites,
      };

    default:
      return state;
  }
}
