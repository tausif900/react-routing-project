//Reducer Topic
import React, { useReducer } from 'react'

function Reducer() {
    //useReducer is used to manage state but when we have complex state logic. it is alternate of useState.
    const reducer = (state, action) => {
        switch (action.type) {
            case "INC":
                return state + 1;
            case "DEC":
                return state - 1;
            case "DOUBLE":
                return state * action.payload;
            case "RESET":
                return 0;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)               //two arg reducer fnc and initial state and it return array. we get variable frst and then dispatch
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button className="btn btn-primary m-3" onClick={() => dispatch({ type: 'INC' })}>Increment</button>
            <button className="btn btn-primary m-3" onClick={() => dispatch({ type: 'DEC' })}>Decrement</button>
            <button className="btn btn-primary m-3" onClick={() => dispatch({ type: 'DOUBLE',payload:6 })}>Double</button>
            <button className="btn btn-primary m-3" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default Reducer
// dispatch call reducer fnc internally.
