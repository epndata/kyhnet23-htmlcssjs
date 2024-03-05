import React, { useRef } from 'react'

const UseRefHook = () => {
    const name = useRef('')
    const email = useRef('')

    const handleName = (e) => {
        name.current = e.target.value
        console.log(name.current)
    }


    return (
        <>
            <form>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" onChange={handleName} value={name.current} />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="text" onChange={handleName} value={name.current} />
                </div>
            </form>

            <div>
                <p>Name: {name.current}</p>
                <p>E-mail address: {email.current}</p>
            </div>
        </>
    )
}

export default UseRefHook