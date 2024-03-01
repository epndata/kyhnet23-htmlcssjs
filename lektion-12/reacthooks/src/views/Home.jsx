import React, { useEffect, useRef, useState } from 'react'

/* 
    useState         Application State Management [toggleMenu, show/hide, courses, user]
    useEffect       Hantera omrenderingar av en komponent (constructor)
    
    useParams       Hämta ut paramerar från url ?firstName=Hans&lastName=Mattin-Lassei
    useContext      En mer avancerad variant av Application State Management

    useLocation     Hanterar browser history och sökvägsinformation
    useNavigate     hanterar navigering inom sidan
*/ 

const Home = () => {
    const [count, setCount] = useState(0) 
    const refCount = useRef(0)

    const changeState = () => {
        setCount (count + 1)
        console.log(count)
    }

    return (
        <>
            <div className="container mt-4">
                <p>State: {count}</p>
                <button onClick={() => setCount(count + 1)}>KLICKA HÄR</button>
            </div>

            <div className="container mt-4">
                <p>Ref: {refCount.current}</p>
                <button onClick={() => {refCount.current = refCount.current + 1}}>KLICKA HÄR</button>
            </div>
        </>
    )
}

export default Home