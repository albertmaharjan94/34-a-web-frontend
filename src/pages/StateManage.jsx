// Create a new compoment LoginTest that points to "/login-test"
// make state for name, email, password
// make a button Submit
// make state for message
// show message in component
// using useEffect setMessage to "Please provide information"
// if name is somehow "Saroj" setMessage to "Welcome saroj"
// check the input on button submit, check of empty input
// if input is empty setMessage to "Provide all information"
// else setMessage "Congratulation"

import React, { useEffect, useState } from 'react'

export default function StateManage() {
    // useState
    // 1. Data, 2. UpdateFunction
    const [data, setData] = useState("My data")
    const [num, setNum] = useState(0)

    const updatingData = () => {
        setData("New data")
    }

    useEffect(
        () => {
            if (data == "Hello World") {
                setNum(100000)
            }
        },
        [data]
    ) // [ dependencies ]
    // useEffect in Initial
    useEffect(
        () => {
            setNum(-90)
            setData("Initial Value")
        },
        [] // leave empty to run when component loads
    )

    const handleName = (e) => {
        setData(e.target.value)
    }

    return (
        <div>
            {data}
            <button onClick={updatingData}>Click me</button>
            <button onClick={
                () => {
                    setData("From Callback")
                }
            }>Click Callback</button>
            <div>
                {num}
                <button onClick={() => setNum(num + 1)}>
                    +
                </button>
                <button onClick={() => setNum(num - 1)}>
                    -
                </button>
            </div>
            <input onChange={
                (e) => {
                    setData(e.target.value)
                }
            }></input>
            <input onChange={handleName}>
            </input>
            
        </div>
    )
}
