import { useEffect, useState } from 'react';

import useFetch  from 'src/hooks/useFetch';
import { TreesContext } from 'src/hooks/useTreesContext';
import { mapHeroesData } from 'src/common/utils/utils';

import Layout from 'src/components/layout/Layout';
import RegularList from 'src/components/regularList/RegularList';
import HeroCard from 'src/components/heroCard/HeroCard';
import Filters from 'src/components/filters/Filters';
import Loader from 'src/components/loader/Loader';
import { Hero } from 'src/types/heroe';

export interface ContextProps {
  items: Hero[] | undefined;
  itemsTemp: Hero[] | undefined;
  setItems: (filteredData: Hero[]) => void;
}

const Home = (): JSX.Element => {
  const { isLoading, data, error } = useFetch('/characters');
  const [items, setItems] = useState<Hero[]>();
  const [itemsTemp, setItemsTemp] = useState<Hero[]>();

  useEffect(() => {
    if (data) {
      setItems(mapHeroesData(data));
      setItemsTemp(mapHeroesData(data));
    }
  }, [data]);

  return (
    <Layout>
      <TreesContext.Provider value={{ items, itemsTemp, setItems }}>
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
      </TreesContext.Provider>
    </Layout>
  );
};

export default Home;
