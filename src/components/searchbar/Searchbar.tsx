import searchImg from 'src/assets/images/search.svg';

interface SearchbarProps {
  onHandleChange: (value: string) => void;
  searchValue: string;
}

const Searchbar = ({ onHandleChange, searchValue }: SearchbarProps): JSX.Element => {
  return (
    <>
      <form className="searchbar-container" action="/" method="get">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => onHandleChange(e.target.value)}
          placeholder="Name of character"
          value={searchValue}
        />
        <div className="search-icon">
          <img src={searchImg} alt="Search" />
        </div>
      </form>
    </>
  );
};

export default Searchbar;
