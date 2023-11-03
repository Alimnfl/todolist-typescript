import { FaTrashAlt } from 'react-icons/fa';

interface TodoProps {
  id: string | number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
  handleDeleteTodo: (id: string | number) => void;
  handleArchiveClick: (id: string | number) => void;
}

function Todo({ id, body, title, archived, createdAt, handleDeleteTodo, handleArchiveClick }: TodoProps) {
  const onDeleteClick = () => {
    handleDeleteTodo(id);
  };
  const onArchiveClick = () => {
    handleArchiveClick(id);
  };
  return (
    <div key={id} className="flex flex-col drop-shadow-md justify-between mt-6 p-4 w-[400px] border h-[200px] bg-yellow-200 rounded-xl">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold ">{title}</span>
        <span className="text-xs">{body}</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="">{createdAt}</p>
        {!archived ? (
          <button className="font-semibold" onClick={onArchiveClick}>
            Archive
          </button>
        ) : null}
        <FaTrashAlt onClick={onDeleteClick} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Todo;
