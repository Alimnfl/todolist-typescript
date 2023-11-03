import React, { useState } from 'react';

type handleAddTodo = (title: string, body: string, boolean: boolean) => void;

interface TodoProps {
  handleAddTodo: handleAddTodo;
}

interface Note {
  id: string;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

function AddTodos({ handleAddTodo }: TodoProps) {
  const [todoText, setTodoText] = useState<Note>({
    id: '0',
    title: '',
    body: '',
    archived: false,
    createdAt: '',
  });

  const characterLimitTitle = 25;
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length <= characterLimitTitle) {
      setTodoText({
        ...todoText,
        title: e.target.value,
      });
    }
  };

  const characterLimitBody = 50;
  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim().length <= characterLimitBody) {
      setTodoText({
        ...todoText,
        body: e.target.value,
      });
    }
  };

  const handleSaveClick = () => {
    if (todoText.body.trim().length > 0) {
      handleAddTodo(todoText.title, todoText.body, todoText.archived);
      setTodoText({ ...todoText, title: '', body: '' });
    }
  };
  return (
    <div className="flex flex-col drop-shadow-md justify-between mt-6 p-4 w-[400px] border h-[200px] bg-blue-400 rounded-xl">
      <input className="justify-start w-full h-[20px] m-1 text-lg font-semibold placeholder-gray-600 bg-blue-400" onChange={handleChangeTitle} value={todoText.title} placeholder="Texting this title" />
      <textarea className="justify-start w-full h-full m-1 text-xs placeholder-gray-600 bg-blue-400" onChange={handleChangeBody} value={todoText.body} placeholder="Texting here your description" />
      <div className="flex flex-row items-center justify-between">
        <p className="">{characterLimitBody - todoText.body.length} remaining</p>
        <button className="p-1 px-3 rounded-lg bg-slate-200" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodos;
