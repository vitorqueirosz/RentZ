import { action } from 'typesafe-actions';
import { Car } from '../../../components/CarItem';

import { CarPayload } from './types';

export function addToFavorites({
  car,
  favoritedsCars,
}: {
  favoritedsCars: CarPayload[];
  car: Car;
}) {
  return action('@favorites/ADD_TO_FAVORITES', { car, favoritedsCars });
}

export function removeToFavorites({
  car,
  favoritedsCars,
}: {
  car: Car;
  favoritedsCars: CarPayload[];
}) {
  return action('@favorites/REMOVE_TO_FAVORITES', { car, favoritedsCars });
}
