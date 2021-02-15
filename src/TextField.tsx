import React from 'react'

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

interface Props {
    text: string;
    person?: Person;
}

const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    )
}

export default TextField