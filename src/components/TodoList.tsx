import TodoItem from "./TodoItem";
import { Todo } from "./types";

interface TodoListProps {
  todos: Todo[] | undefined; // Ensure todos can be undefined
  onEditTodo: (id: number, updatedTitle: string) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEditTodo,
  onDeleteTodo,
}) => {
  if (!todos || todos.length === 0) {
    // Handle the case where todos is undefined or empty
    return (
      <div className="mt-4">
        <p className="text-gray-600">No todos to display.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
