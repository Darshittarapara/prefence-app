import React, { memo } from 'react'

const Counter = ({
    onClick
}) => {
    console.log("Product")
    return (
        <div>
            <button onClick={() => onClick()}>
                Product
            </button>
        </div>
    )
}

export default memo(Counter)
