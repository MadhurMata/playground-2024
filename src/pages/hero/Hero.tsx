import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import  useFetch  from 'src/hooks/useFetch';
import { mapHeroData } from 'src/common/utils/utils';

import Layout from 'src/components/layout/Layout';
import RegularList from 'src/components/regularList/RegularList';
import EventCard from 'src/components/eventCard/EventCard';
import ImageContainer from 'src/components/imageContainer/ImageContainer';
import Loader from 'src/components/loader/Loader';
import { Hero } from 'src/types/heroe';

const Heroe = (): JSX.Element => {
  const params = useParams();
  const { data, isLoading, error } = useFetch(`/characters/${params.heroId}`);
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    if (data) {
      setHero(mapHeroData(data));
    }
  }, [data]);

  if (!hero) return <></>;

  return (
    <Layout>
      {isLoading ? (
        <Loader></Loader>
      ) : error ? (
        <>
          <h5>Error loading data!...</h5>
        </>
      ) : (
        hero && (
          <>
            <section className="hero-detail-top">
              <ImageContainer
                url={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                altSource={hero.name}
                stylesProp="hero-detail-top__img-container"
              />
              <div className="hero-detail-top__info-container">
                <h3>{hero.name}</h3>
                <h5>{hero.modified}</h5>
                <p>{hero.description}</p>
              </div>
            </section>
            <section className="hero-detail-bottom">
              {hero.events.available > 0 ? (
                <>
                  <h5>Events</h5>
                  <RegularList
                    items={hero.events.items}
                    resourceName="event"
                    styles="regular-list"
                    itemComponent={EventCard as React.ComponentType}
                  />
                </>
              ) : null}
            </section>
          </>
        )
      )}
    </Layout>
  );
};

export default Heroe;
