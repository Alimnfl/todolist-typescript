import { FaTrashAlt } from 'react-icons/fa';

interface TodoProps {
  id: string;
  text: string;
  date: string;
  handleDeleteTodo: (id: string) => void;
}

function Todo({ id, text, date, handleDeleteTodo }: TodoProps) {
  const onDeleteClick = () => {
    handleDeleteTodo(id);
  };
  return (
    <div className="flex flex-col drop-shadow-md justify-between mt-6 p-4 w-[400px] border h-[200px] bg-yellow-200 rounded-xl">
      <span className="text-xs">{text}</span>
      <div className="flex flex-row items-center justify-between">
        <p className="">{date}</p>
        <FaTrashAlt onClick={onDeleteClick} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Todo;
