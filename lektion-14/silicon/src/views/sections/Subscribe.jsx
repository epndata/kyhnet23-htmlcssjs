import React, { useState } from 'react'
import { UseAppStore } from '../../stores/AppStore'
import { validateName } from '../../assets/validation'
import { Link } from 'react-router-dom'

const Subscribe = () => {
    const { handleSubscribe, statusMessage } = UseAppStore()
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateName(email))
            handleSubscribe(email)
        else
            console.log('inte giltig')
    }

    return (
        <div>
            <Link to="/news">news</Link>
            <div>{statusMessage}</div>
            <form onSubmit={handleSubmit} noValidate>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        

    )
}

export default Subscribe