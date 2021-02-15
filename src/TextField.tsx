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

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({text}) => {

    const [count, setCount] = useState <TextNode> ({text: '5'})


    return (
        <div>
            <input />
        </div>
    )
}

export default TextField