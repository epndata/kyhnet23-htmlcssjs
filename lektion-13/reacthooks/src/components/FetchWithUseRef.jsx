import React, { useRef, useEffect } from 'react'

const FetchWithUseRef = () => {
    const items = useRef()

    useEffect(() => {
        fetch('https://kyhnet23-assignment.azurewebsites.net/api/news')
        .then(res => res.json())
        .then(data => {
            items.current = data
            console.log(items.current)
        })
    }, [])

    return (
        <div>

        {
            items.current.map(item => (
                <div>{item.title}</div>
            ))
        }

        </div>
    )
}

export default FetchWithUseRef