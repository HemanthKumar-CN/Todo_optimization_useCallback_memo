import React, { useCallback, useState } from 'react'
import TodoItems from './TodoItems';
import {v4 as uuid} from 'uuid';

const initState = [
    {id: 1, status: false, title: "Task1" },
    {id: 2, status: false, title: "Task2" },
    {id: 3, status: false, title: "Task3" },
    ];

const Todo = () => {

  const [todos, setTodos] = useState(initState);
  const [currentTodo, setCurrentTodo] = useState ("")


  const todoHandler =(e)=>{
    setCurrentTodo(e.target.value)
  }
  const handleAddTask = () => {
    const payload = {
      id: uuid(),
      status:false,
      title:currentTodo
    }

    setTodos([...todos, payload])
    setCurrentTodo("")
  }

  // const toggleStatus = useCallback((id)=>{
  //   let newTodoList = todos.map(item => item.id === id ? {...item, status: !item.status} : item )

  //   setTodos(newTodoList)
  // },[todos])

const toggleStatus = useCallback((id)=>{
  setTodos((prev)=> prev.map((item) => item.id === id ? {...item, status: !item.status} : item))
},[])

  // const handleDelete =useCallback((id) =>{
  //   let newTodo = todos.filter(item => item.id !== id);
  //   setTodos(newTodo)
  // },[todos])

  const handleDelete = useCallback((id)=> {
    setTodos((prev)=> prev.filter((item)=> item.id !== id))
  },[])


  return (
    <div>
        <h1>Todo</h1>
        <input type="text"  value={currentTodo} onChange={todoHandler}/>
        <button onClick={handleAddTask}>ADD</button>
        {
          todos?.length && todos.map(item => (
            <TodoItems key={item.id} {...item} toggleStatus={toggleStatus} handleDelete={handleDelete}/>
          ))
        }
    </div>
  )
}

export default Todo