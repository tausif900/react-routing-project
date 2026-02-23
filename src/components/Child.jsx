import React, { useEffect } from 'react'

function Child({data}) {
    useEffect(() => {
        console.log('Child Component',data);
    })
    return (
        <div>
            child
        </div>
    )
}
// this is the way to write memoization
export default React.memo(Child)
