import React, { useEffect, useState } from 'react';
import { IRequestForm } from '../interfaces/IRequestForm';
import { ISpecialist } from '../interfaces/ISpecialist';
import { AppStore } from '../stores/AppStore';
import { IAppStore } from '../interfaces/IAppStore';

const Contact = () => {
    const { specialists, getSpecialists, handleBookAppointmentAsync } = React.useContext(AppStore) as IAppStore;
    const [form, setForm] = useState<IRequestForm>({fullName: '', email: '', specialist: '', date: '', time: ''});

    useEffect(() => {
        getSpecialists()
    }, [])


    const handleForm = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
        setForm({ ...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const statusCode = await handleBookAppointmentAsync(form)
        console.log(statusCode)
    };

    return (
        <section className="contact-section">
            <h1>Contact Us</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full name</label>
                    <input id="fullName" onChange={handleForm} type="text" />
                </div>
                <div>
                    <label>Email address</label>
                    <input id="email" onChange={handleForm} type="email" />
                </div>
                <div>
                    <label>Specialists</label>
                    <select id="specialist" onChange={handleForm}>
                        <option defaultValue="-1">Choose your specialist</option>
                        {specialists.map((s: ISpecialist, index) => (
                            <option key={index} value={index}>{s.firstName} {s.lastName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Date</label>
                    <input id="date" onChange={handleForm} type="date" />
                </div>

                <div>
                    <label>Time</label>
                    <input id="time" onChange={handleForm} type="time" />
                </div>
                <button type="submit">SEND</button>
            </form>
        </section>
    );
};

export default Contact;