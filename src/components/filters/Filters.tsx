import { useState, useEffect } from 'react';

import Searchbar from '../searchbar/Searchbar';
import Button from 'src/components/button/Button';
import Checkbox from 'src/components/checkbox/Checkbox';
import Select from 'src/components/select/Select';

import { dateFilter, searchFilter } from 'src/common/utils/utils';
import useTreesContext from 'src/hooks/useTreesContext';

const selectOptions = ['Filter by date (Not filtered)', '20 century', '21 century'];

const Filters = () => {
  const { items, itemsTemp, setItems } = useTreesContext();
  const [showFilter, setShowFilter] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    if (items) filter();
  }, [checkbox, searchValue, selectValue]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const updateSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const toggleCheckboxState = () => {
    setCheckbox(!checkbox);
  };

  const updateSelect = (value: string) => {
    setSelectValue(value);
  };

  /* Filters array of heroes everytime one of the inputs changes */
  const filter = () => {
    let filteredData = checkbox ? itemsTemp : itemsTemp;
    filteredData = dateFilter(filteredData, selectValue);
    filteredData = searchValue ? searchFilter(filteredData, searchValue) : filteredData;

    setItems(filteredData);
  };

  return (
    <div className="filter">
      <div className="filter__shown">
        <Searchbar onHandleChange={updateSearchValue} searchValue={searchValue} />
        <Button onAction={toggleFilter} textContent="Filter" styles="icon-filter" />
      </div>
      {showFilter ? (
        <div className="filter__hidden">
          <Checkbox
            onToggleCheckboxState={toggleCheckboxState}
            checkbox={checkbox}
            label="Heroes with description only"
          />
          <Select
            onUpdateSelect={updateSelect}
            selectOptions={selectOptions}
            selectValue={selectValue}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
