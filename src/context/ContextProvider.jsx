import { useEffect, useState } from "react";
import MainContext from "./MainContext"

const ContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    }

    const deleteTodo = (id) => {
        const delTodo = todos.filter((val)=> {
            return  val.id !== id
        });
        setTodos(delTodo)
    }

    const updatedTodo = (id,todo) => {
        const updateTodoItem = todos.map((val)=> {
          return ( val?.id === id  ? todo : val);    
        })
        setTodos(updateTodoItem);
    }

    
  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem('todos'));
        if (todo && todo.length > 0) {
            setTodos(todo);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <MainContext.Provider value={{ todos, addTodos,deleteTodo, updatedTodo , toggleComplete}}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider;