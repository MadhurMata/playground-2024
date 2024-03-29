import { Hero } from "src/types/heroe";

/**
 * Maps API response returning only needed data:
 * @param {array} heroesList List of heroes.
 */
export const mapHeroesData = (heroesList: Hero[]): Hero[] => {
  return heroesList.map((hero) => {
    return {
      ...hero,
      modified: dateFormater(hero.modified)
    };
  });
};

/**
 * Maps API response returning only needed data:
 * @param {object} hero Hero data.
 */
export const mapHeroData = (hero: Hero[]): Hero => {
  return {
    ...hero[0],
    modified: dateFormater(hero[0].modified)
  };
};

/**
 * Formats date retriving the year:
 * @param {string} date Modified date.
 */
export const dateFormater = (date: number) => {
  return new Date(date).getFullYear();
};

/**
 * Filters heroes array by modified year:
 * @param {array} filteredData Heroes list.
 * @param {string} selectValue Select value.
 */
export const dateFilter = (filteredData: Hero[] | undefined, selectValue: string): Hero[] | undefined => {
  switch (selectValue) {
    case '1':
      filteredData = filteredData?.filter((item) => item.modified < 2000);
      break;
    case '2':
      filteredData = filteredData?.filter((item) => item.modified >= 2000);
      break;
    default:
      filteredData;
      break;
  }
  return filteredData;
};

/**
 * Filters heroes array by description:
 * @param {array} itemsTemp Heroes list.
 */
export const descriptionFilter = (itemsTemp: Hero[]) => {
  return itemsTemp.filter((item) => item.description);
};

/**
 * Filters heroes array :
 * @param {array} filteredData Heroes list.
 * @param {string} searchValue Search input value.
 */
export const searchFilter = (filteredData: Hero[], searchValue: string): Hero[] => {
  return filteredData.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
};
