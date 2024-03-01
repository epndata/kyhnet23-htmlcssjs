import React, { useEffect, useState, useRef } from 'react'
import DropDownButton from './components/DropDownButton'

/* 
    
    useParams       Hämta ut paramerar från url ?firstName=Hans&lastName=Mattin-Lassei
    useContext      En mer avancerad variant av Application State Management

    useLocation     Hanterar browser history och sökvägsinformation
    useNavigate     hanterar navigering inom sidan
*/ 

const Home = () => {
    const url = 'https://kyhnet23-assignment.azurewebsites.net/api/specialists'
    const [specialists, setSpecialists] = useState([])
    const loaded = useRef(false)
    
    useEffect(() => {
        if (!loaded.current) {
            setSpecialists([])
        
            const fetchData = async () => {
                const result = await fetch(url)
                const data = await result.json()
                
                for (let item of data) {
                    setSpecialists(current => [...current, { value: item.id, text: `${item.firstName} ${item.lastName}` }])
                }
            }

            fetchData()
            loaded.current = true
        }
    }, [])


    return (
        <>
            <div className="container mt-4">
                <DropDownButton options={specialists} />
           </div>
        </>
    )
}

export default Home