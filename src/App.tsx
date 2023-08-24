import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Search from './components/Search';
import TodosList from './components/TodosList';

interface Todo {
  id: string;
  text: string;
  date: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: nanoid(),
      text: 'This is my first todo!',
      date: '3/18/2023',
    },
    {
      id: nanoid(),
      text: 'Go to the gym!',
      date: '3/18/2023',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [toggleMode, setToggleMode] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('ts-react-todos-data') || 'null');

    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ts-react-todos-data', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string): void => {
    // Untuk add Todo List
    const date = new Date();
    const newTodo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newTodos: Todo[] = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodos = (id: string): void => {
    // Untuk delete Todo List
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={` flex items-center justify-center w-full h-screen ${toggleMode ? 'bg-black ' : ''} `}>
      <div className="p-5 w-[1300px] h-[700px] ">
        <Header handleToggleMode={setToggleMode} />
        <Search handleSearchText={setSearchText} />
        <TodosList todos={todos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddTodo={addTodo} handleDeleteTodo={deleteTodos} />
      </div>
    </div>
  );
}

export default App;
