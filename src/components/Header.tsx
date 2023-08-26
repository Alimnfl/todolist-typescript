interface HeaderProps {
  handleToggleMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the modeOnScreen function separately
const modeOnScreen = (handleToggleMode: React.Dispatch<React.SetStateAction<boolean>>) => {
  handleToggleMode((previousDarkMode: boolean) => !previousDarkMode);
};

function Header({ handleToggleMode }: HeaderProps): JSX.Element {
  return (
    <div className="flex items-center justify-between w-full text-black">
      <h1 data-test="heading-1" className="text-2xl font-bold">
        Alimnfl Todos - React-TS
      </h1>
      <button data-test="button-toggle" onClick={() => modeOnScreen(handleToggleMode)} className="p-1 px-3 font-medium rounded-xl bg-slate-300 text-md">
        Toggle Mode
      </button>
    </div>
  );
}

export default Header;
