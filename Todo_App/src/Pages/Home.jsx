import React, { useEffect, useReducer, useState } from 'react'
import '../SASS/Home.scss'
import reducer from '../Reducers/Reducer'

const Home = () => {
    const [input, setInput] = useState('')
    const [state, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        const myTask = localStorage.getItem("myTask")
        if (myTask === null) {
            localStorage.setItem("myTask", JSON.stringify([]))

        } else {
            const initialState = JSON.parse(myTask)
            dispatch({ type: "setInitialState", payload: { initialState: initialState } })
        }
    }, [])
    return (
        <div id='home'>
            <div>
                <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Enter Task' />
                <button onClick={() => { dispatch({ type: "AddTodo", payload: { text: input } }); setInput('') }}>Add</button>
            </div>

            <div className='cardContainer'>
                {
                    state.map((data) => {
                        const index = state.indexOf(data)
                        return <div key={index} className='card'>
                            <h2>{index + 1}. {data.text} </h2>
                            <p>Status: {data.status}</p>
                            <button onClick={() => { dispatch({ type: "updateTodo", payload: { index: index } }) }}>Update Status</button>
                            <button onClick={() => { dispatch({ type: "deleteTodo", payload: { index: index } }) }}>Remove</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home
