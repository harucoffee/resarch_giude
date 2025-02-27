"use client"

import { useState } from "react";
import Button from '@mui/material/Button';

function ContactForm() {
    const[ email, setEmail ] = useState('');
    const[ message, setMessage ] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({ email, message }),
        })
    }

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <Button variant="contained" type="submit" >Submit</Button>
            </form>
        </div>
    )

}
export default ContactForm;