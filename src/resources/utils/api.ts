import axios, { AxiosResponse } from 'axios';
import { Todo } from '../../components/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// Function to fetch a list of todos from the API
export const fetchTodos = async (page: number, todosPerPage: number): Promise<Todo[]> => {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(API_BASE_URL, {
      params: {
        _page: page,
        _limit: todosPerPage,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = (error as Error).message; 
    throw new Error('Failed to fetch todos: ' + errorMessage);
  }
};

// Function to add a new todo to the API
export const addTodo = async (title: string): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.post(API_BASE_URL, {
      title,
      completed: false, 
    });
    return response.data;
  } catch (error) {
    const errorMessage = (error as Error).message; 
    throw new Error('Failed to add todo: ' + errorMessage);
  }
};

// Function to edit an existing todo in the API
export const editTodo = async (id: number, updatedTitle: string): Promise<Todo> => {
  try {
    const response: AxiosResponse<Todo> = await axios.put(`${API_BASE_URL}/${id}`, {
      title: updatedTitle,
    });
    return response.data;
  } catch (error) {
    const errorMessage = (error as Error).message; 
    throw new Error('Failed to edit todo: ' + errorMessage);
  }
};

// Function to delete a todo from the API
export const deleteTodo = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    const errorMessage = (error as Error).message; 
    throw new Error('Failed to delete todo: ' + errorMessage);
  }
};
