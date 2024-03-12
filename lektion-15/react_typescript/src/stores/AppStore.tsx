import { createContext, useState } from "react";
import { IAppStore } from '../interfaces/IAppStore';
import { ISpecialist } from "../interfaces/ISpecialist";
import { IRequestForm } from "../interfaces/IRequestForm";

export const AppStore = createContext<IAppStore | null>(null);


const AppStoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const apiUrl:String = "https://kyhnet23-assignment.azurewebsites.net/api";
    const [specialists, setSpecialists] = useState<ISpecialist[]>([])

    const getSpecialists = async () => {
        const res = await fetch(`${apiUrl}/specialists`)
        setSpecialists(await res.json())
    }

    const getNews = async () => {
        const res = await fetch('')
        setSpecialists(await res.json())
    }

    const handleBookAppointmentAsync = async (form:IRequestForm) => {
        const res = await fetch(`${apiUrl}/book-appointment`, {
            method: 'post',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(form)
        })

        return res.status
    }


    const handleSubscribe = async (email:String) => {
        const res = await fetch(`${apiUrl}/subscribe?email=${email}`, {
            method: 'post'
        })
        setSpecialists(await res.json())
    }

    return (
        <AppStore.Provider value={{ specialists, getSpecialists, getNews, handleSubscribe, handleBookAppointmentAsync }}>
          {children}
        </AppStore.Provider>
      );
};

export default AppStoreProvider;