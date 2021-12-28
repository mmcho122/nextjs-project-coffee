import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { COFFEE_API_ENDPOINT } from '../constants';

export const useCoffeeData = (path: string) => {
  return useSWR(`${COFFEE_API_ENDPOINT}${path}`, fetcher);
}