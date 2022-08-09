import React, { useState } from 'react'
import Todo from './Todo'
import '../styles/form.css'

export default function Form() {
    const [todo, setTodo] = useState('')
    // const [todoList, setTodoList] =useState(localStorage.getItem())

    const handleSubmit = (e) => { 
        e.preventDefault()
        // console.log(e.target[0].value)
        // const key = JSON.stringify(Math.floor(Math.random() * 100))
        // // document.location.reload()
        // localStorage.setItem(key,e.target[0].value)
        // e.target[0].value = ''
        localStorage.setItem('list','[]')
        
    }
    const handleChange = (e) => {
        setTodo(e.target.value)
    }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Creez un todo</label>
            <input type='text' id='todo' value={todo} onChange={handleChange}></input>
            <button>Creer un todo</button>
        </form>
    </div>
  )
}
