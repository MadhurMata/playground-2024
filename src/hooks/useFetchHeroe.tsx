import { useEffect } from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Hero } from 'src/types/heroe';

 const useFetchHeroe = ( heroeId: string | undefined): UseQueryResult<Hero[]> => {

  useEffect(() => {
    if (!heroeId) return;
  })

  const fetchUsers = async (): Promise<Hero[]> => {
    // const response = await fetch(
    //   `${process.env.REACT_APP_HEROES_BASE_URL}${uri}?ts=10&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}`
    // );
    const response = await fetch(
      `${'https://gateway.marvel.com:443/v1/public'}/characters/${heroeId}?ts=10&apikey=${'0bcf8d98f3e7540327e63fa3a911f9b9'}&hash=${'d98156cf35682737c9ab41fdbf518d38'}`
    );
    const data = await response.json();
    return data.data.results;
  }

  return useQuery({queryKey: ['heroe'],queryFn: () => fetchUsers(), staleTime: 10 * (60 * 1000)});
}


export default useFetchHeroe
