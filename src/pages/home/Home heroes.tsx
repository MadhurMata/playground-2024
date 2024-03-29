import { useEffect, useState } from 'react';

import { TreesContext } from 'src/hooks/useTreesContext';
import { mapHeroesData } from 'src/common/utils/utils';

import RegularList from 'src/components/regularList/RegularList';
import HeroCard from 'src/components/heroCard/HeroCard';
import Filters from 'src/components/filters/Filters';
import Loader from 'src/components/loader/Loader';
import { Hero } from 'src/types/heroe';
import { useInfiniteQuery } from '@tanstack/react-query';
import useFetchHeroes from 'src/hooks/useFetchHeroes';

export interface ContextProps {
  items: Hero[] | undefined;
  itemsTemp: Hero[] | undefined;
  setItems: (filteredData: Hero[]) => void;
}

const publicKey = '0bcf8d98f3e7540327e63fa3a911f9b9'; // Replace with your Marvel API public key
const privateKey = 'd98156cf35682737c9ab41fdbf518d38'; // Replace with your Marvel API private key
const ts = Date.now(); // Timestamp

const fetchCharacters = async ({ pageParam = 0 }): Promise<Hero[]> => {
    const limit = 10; // Adjust limit as needed
    const offset = pageParam * limit;
    const url = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limit}&ts=10&apikey=${publicKey}&hash=${privateKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('ghjgkhj', data);
    return data.data.results;
};

const Home = (): JSX.Element => {
   //const { isLoading, data: heroes, error } = useFetch('/characters');
  //const { isLoading, data: yo, error } = useFetchHeroes();

  const { error, isLoading, data: yo } = useInfiniteQuery({
    queryKey: ['marvel'],
    queryFn:  fetchCharacters,
    initialPageParam: 0,
    getNextPageParam: (data) => {
      console.log('data', data);
      return data || undefined
    },
  });
  
  

  console.log('yoooooo', yo);

  
  const heroes = yo?.pages.map((items)=> items)
  
  console.log('heroes', heroes);

  const [items, setItems] = useState<Hero[]>();
  const [itemsTemp, setItemsTemp] = useState<Hero[]>();

  useEffect(() => {
    if (heroes) {
      setItems(mapHeroesData(heroes));
      setItemsTemp(mapHeroesData(heroes));
    }
  }, [heroes]);

  return (
    <div className='wrapper'>
      {/* <TreesContext.Provider value={{ items, itemsTemp, setItems }}>
        <Filters />
        {isLoading ? (
          <Loader></Loader>
        ) : error ? (
          <>
            <h5>Error loading data!...</h5>
          </>
        ) : (
          items && (
            <RegularList
              items={items}
              resourceName="hero"
              emptyItemsMessage={`Sorry we couldn't find any hero`}
              styles="list-grid"
              itemComponent={HeroCard as React.ComponentType}
            />
          )
        )}
      </TreesContext.Provider> */}
    </div>
  );
};

export default Home;
