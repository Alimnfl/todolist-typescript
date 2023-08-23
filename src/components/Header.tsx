interface HeaderProps {
  handleToggleMode: (previousDarkMode: boolean) => void;
}

function Header({ handleToggleMode }: HeaderProps) {
  const modeOnScreen = () => {
    handleToggleMode((previousDarkMode: boolean) => !previousDarkMode);
  };

  return (
    <div className="flex items-center justify-between w-full text-black">
      <h1 className="text-2xl font-bold ">Alimnfl Todos - React-TS</h1>
      <button onClick={modeOnScreen} className="p-1 px-3 font-medium rounded-xl bg-slate-300 text-md">
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
