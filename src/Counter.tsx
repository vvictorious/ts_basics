import React from 'react'

interface Props {
    count: number;
}

const Counter: React.FC<Props> = ({count}) => {
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter