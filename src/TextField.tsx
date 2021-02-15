import React, { useState, useRef } from 'react'

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

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)


    return (
        <div ref={divRef}>
            <input ref={inputRef} />
        </div>
    )
}

export default TextField