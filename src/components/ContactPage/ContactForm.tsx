"use client"
import { FormEvent, useEffect, useState } from "react";
import "../../styles/components/ContactPage/ContactForm.css";

export default function ContactForm() {
    const [isLoaded, SetIsLoaded] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        });
    }

    useEffect(() => {
        SetIsLoaded(true);
    }, []);

    return (

        <div className="contact-form">
            {isLoaded ? (
                <form className="contact-input" onSubmit={handleSubmit}>
                    <div>
                        <label className="input-box">
                            Firstname:
                            <input
                                className="input"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="input-box">
                            Lastname:
                            <input
                                className="input"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="input-box">
                            Email:
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="input-box">
                            Phone Number:
                            <input
                                className="input"
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="loading">Loading...</div>
            )}
        </div>

    );
}