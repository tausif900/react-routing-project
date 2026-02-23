import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0)

    // this we have written to give value to child
    const [value, setValue] = useState(0)
    const increment = () => {
        setCount(count + 1)
        if (count % 10 === 0) {
            setValue(count)
        }
    }
    useEffect(() => {
        console.log('Parent Component');
    })
    return (
        <div>
            <h1>{count}</h1>
            <button
                type="button"
                className="btn btn-primary m-3"
                onClick={increment}
            >
                Increment
            </button>

            <Child data={value}/>
        </div>
    )
}

export default Parent
