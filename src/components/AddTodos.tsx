import React, { useState } from 'react';

// interface handleChangeArg {
//   // yang diubah adalah si targetvaluenya dikasih string
//   target: {
//     value: string;
//   };
// }

function AddTodos({ handleAddTodo }) {
  const [todoText, setTodoText] = useState<string>('');
  const characterLimit = 200;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim().length <= characterLimit) {
      setTodoText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (todoText.trim().length > 0) {
      setTodoText('');
    }
  };

  return (
    <div className="flex flex-col drop-shadow-md justify-between mt-6 p-4 w-[400px] border h-[200px] bg-blue-400 rounded-xl">
      <textarea className="justify-start w-full h-full m-1 text-xs placeholder-gray-600 bg-blue-400" onChange={handleChange} value={todoText} placeholder="Texting here"></textarea>
      <div className="flex flex-row items-center justify-between">
        <p className="">{characterLimit - todoText.length} remaining</p>
        <button className="p-1 px-3 rounded-lg bg-slate-200" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodos;
