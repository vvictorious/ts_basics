import React, { useState } from 'react'

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

interface Props {
    text: string;
    person?: Person;
}

const TextField: React.FC<Props> = ({text}) => {

    const [count, setCount] = useState <number | null> (5)

    setCount(null)

    return (
        <div>
            <input />
        </div>
    )
}

export default TextField