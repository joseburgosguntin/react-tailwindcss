import './App.css';

import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;  
        default:
            throw new Error();
    } 
}

function App() {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div className='text-white  font-bold text-6xl bg-slate-400 '>
            Count: {state}
            <div className='flex justify-center'>
            <button className='w-60 h-60 bg-gradient-to-b from-red-600 to-red-400 rounded-full m-5 hover:shadow-3xl hover:scale-110 hover:rounded-lg ease-linear' onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className='w-60 h-60 bg-gradient-to-b from-cyan-300 to-cyan-200 rounded-full m-5 hover:shadow-3xl hover:scale-110 hover:rounded-lg ease-linear' onClick={() => dispatch({ type: 'increment'})}>+</button>
            </div>
        </div>
    )
    
}

export default App;