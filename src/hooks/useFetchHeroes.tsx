import { UseQueryResult, useInfiniteQuery } from '@tanstack/react-query';
import { Hero } from 'src/types/heroe';

const publicKey = '0bcf8d98f3e7540327e63fa3a911f9b9'; // Replace with your Marvel API public key
const privateKey = 'd98156cf35682737c9ab41fdbf518d38'; // Replace with your Marvel API private key
const ts = Date.now(); // Timestamp

const fetchCharacters = async ({ pageParam = 0 }): Promise<Hero[]> => {
    const limit = 10; // Adjust limit as needed
    const offset = pageParam * limit;
    const url = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limit}&ts=10&apikey=${publicKey}&hash=${privateKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
};

export function useFetchHeroes(): UseQueryResult {
  return useInfiniteQuery({
    queryKey: ['marvel'],
    queryFn:  fetchCharacters,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      console.log('data', lastPage);
      return lastPage || undefined
    },
    });
  }

export default useFetchHeroes;
