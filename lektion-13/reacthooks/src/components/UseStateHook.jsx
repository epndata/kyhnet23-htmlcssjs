import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }


    return (
        <>
            <form>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" onChange={handleName} value={name} />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" onChange={handleEmail} value={email}  />
                </div>
            </form>

            <div>
                <p>Name: {name}</p>
                <p>E-mail address: {email}</p>
            </div>
        </>
    )
}

export default UseStateHook