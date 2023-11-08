import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  handleSearchText: (searchText: string) => void;
  toggleMode: boolean;
}

function Search({ handleSearchText, toggleMode }: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    handleSearchText(searchText);
  };
  return (
    <div className="flex flex-row items-center w-full gap-2 p-2 mt-6 border rounded-md bg-slate-200">
      <FaSearch size="12px" className={`${toggleMode ? 'text-white' : 'text-black'}`} />
      <input data-test="search-input" type="text" placeholder="Search your note" onChange={handleChange} className="bg-slate-200 w-full h-full text-[14px]" />
    </div>
  );
}

export default Search;
