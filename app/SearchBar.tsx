import { Logo, SearchForm } from './components';

const SearchBar = () => {
  return (
    <div className="search-bar m-b">
      <div className="grid center">
        <div className="col-12 col-md-1 col-offset-1">
          <Logo to="/" />
        </div>
        <div className="col-12 col-md-9">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
