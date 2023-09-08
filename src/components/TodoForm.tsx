import React, { useState } from "react";

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Add a new todo"
          className="border rounded-md p-1 flex-grow"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 text-white rounded-md px-2 py-1"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
