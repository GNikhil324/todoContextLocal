import { useContext } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import MainContext from './context/MainContext'
import TodoList from './components/TodoList';

function App() {
  const { todos } = useContext(MainContext);
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos?.map((val) => {
            return (
              <div key={val.id} className='w-full'>
                <TodoList todo={val} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
