import React, { useEffect } from 'react'

function Child(obj) {
    useEffect(() => {
        console.log('Child Component',obj);
    })
    return (
        <div>
            <h1>child{obj}</h1>
        </div>
    )
}
// this is the way to write memoization
export default React.memo(Child)
