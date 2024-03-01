import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const NewsDetails = () => {
    const url = 'https://kyhnet23-assignment.azurewebsites.net/api/news'
    const { id } = useParams()
    const [item, setItem] = useState({})


    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`${url}/${id}`)

            if (res.status === 200) {
                const data = await res.json()

                if(item != null) 
                    setItem(data)
            }
        }
        fetchData()

    }, [id])


    return (
        <div>{id}</div>
    )
}

export default NewsDetails