import React, { useRef, useState } from 'react'

interface props{
  todo : string,
  setTodo : React.Dispatch<React.SetStateAction<string>>,
  onSubmit : (e:React.FormEvent) => void;
}

const Content: React.FC<props> = ({todo, setTodo, onSubmit}) => {
    
  return (
    <div className='flex items-center flex-col'>
        <span> SIMPLE TODO APP </span>
        <form className='relative flex items-center' onSubmit={onSubmit}>
            <input className='border-4 border-indigo-300/100 rounded-full outline-2 outline-indigo-500/100 p-1 pl-1' value={todo} onChange={
              (e) => setTodo(e.target.value)
            }  type="text" placeholder='Enter todo' />
            <button className='bg-indigo-500 p-1 rounded-full absolute right-1.5 ' type='submit'>GO</button>
        </form>
    </div>
  )
}

export default Content;