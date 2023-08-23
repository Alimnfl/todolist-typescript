import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  setSearchText: (searchText: string) => void;
}

function Search({ setSearchText }: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };
  return (
    <div className="flex flex-row items-center w-full gap-2 p-2 mt-6 border rounded-md bg-slate-200">
      <FaSearch size="12px" className="text-white" />
      <input type="text" placeholder="Search your note" onChange={handleChange} className="bg-slate-200 w-full h-full text-[14px]" />
    </div>
    //can search with handleChange
  );
}

export default Search;
