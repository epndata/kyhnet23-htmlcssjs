import React, { useEffect, useState } from 'react'

const FetchWithUseState = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://kyhnet23-assignment.azurewebsites.net/api/news')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(items)
        })
    }, [])

    return (
        <div>

        {
            items.map(item => (
                <div key={item.id}>{item.title}</div>
            ))
        }

        </div>
    )
}

export default FetchWithUseState