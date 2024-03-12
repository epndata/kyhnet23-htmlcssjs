import React, { useState } from 'react'
import { UseAppStore } from '../stores/AppStore'

const Contact = () => {
    const { postData } = UseAppStore()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await postData('/contacts', {firstName, lastName, email, password})
        console.log(res)
        
        if (res.status === 200)
            console.log('allt gick bra')
    }


    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="">First name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your first name" />
                </div>
                <div>
                    <label htmlFor="">Last name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your last name" />
                </div>
                <div>
                    <label htmlFor="">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contact