import { Dispatch, SetStateAction } from 'react';

interface Header {
  handleToggleMode: Dispatch<SetStateAction<boolean>>;
}

function Header({ handleToggleMode }: Header) {
  const handleToggleDarkMode = () => {
    handleToggleMode((previousDarkmode: boolean) => !previousDarkmode);
  };

  return (
    <div className="flex items-center justify-between w-full text-black">
      <h1 className="text-2xl font-bold">Alimnfl Todos</h1>
      <button onClick={handleToggleDarkMode} className="p-1 px-3 font-medium rounded-xl bg-slate-300 text-md">
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
