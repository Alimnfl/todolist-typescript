import AddTodos from './AddTodos';
import Todo from './Todos';

interface Todo {
  id: string;
  text: string;
  date: string;
}

// interface AddTodosProps {
//   handleAddTodo: (addTodo: string) => void;
// }

interface TodoProps {
  todos: Todo[];
  handleDeleteTodo: (deleteTodo: string) => void;
  handleAddTodo: (addTodo: string) => void;
}

function TodosList({ todos, handleDeleteTodo, handleAddTodo }: TodoProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-[30px]">
      {todos.map((todo) => (
        <Todo id={todo.id} text={todo.text} date={todo.date} handleDeleteTodo={handleDeleteTodo} />
      ))}
      <AddTodos handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default TodosList;
