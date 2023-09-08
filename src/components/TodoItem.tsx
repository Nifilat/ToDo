import React, { useState } from 'react';
import { Todo } from './types';

interface TodoItemProps {
  todo: Todo;
  onEditTodo: (id: number, updatedTitle: string) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditTodo(todo.id, editedTitle);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the edited title if editing is canceled
    setEditedTitle(todo.title);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div
      className={`flex justify-between items-center border p-2 my-2 ${
        isEditing ? 'bg-gray-100' : ''
      }`}
      onClick={() => setIsEditing(!isEditing)}
    >
      <div>
        <p className="font-semibold">{todo.title}</p>
        <p>Start Date: {todo.startDate}</p>
        <p>End Date: {todo.endDate}</p>
        <p>Checkbox: {todo.checkbox}</p>
      </div>
      {isEditing && (
        <div>
          <button onClick={handleEditClick} className="text-blue-500 hover:text-blue-600">
            Edit
          </button>
          <button onClick={handleDeleteClick} className="ml-2 text-red-500 hover:text-red-600">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
