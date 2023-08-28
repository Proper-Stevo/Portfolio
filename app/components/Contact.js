"use client";
import React, { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setstatus] = useState("");

    const handleInputChange = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        } else {
            setMessage(event.target.value);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // checking to see if all input fields are full
        if (email && name && message) {
            // checking to make sure email is valid
            if (checkEmail(email)) {
                const encodedSubject = "Email From Portfolio";
                const encodedBody = `${message} - from ${name} ${email}`;

                // hyper link to open mail client and populate subject and body --- still working on this
                const link = `mailto:steven.barrios92@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

                window.location = link;
            } else {
                setstatus("email is invalid");
            }
        } else {
            setstatus("all input fields need to be filled ");
        }
    };

    const checkEmail = (email) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    return (
        <div className="background3" id="contactMe">
            <div className=" w-full font-serif">
            <div className='contact-display text-4xl pt-80 pl-6'>Contact Me!</div>
            <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white">
                <div className="form-group ">
                    <label for="name" className="py-1 ">
                        Name
                    </label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="First Name, Last Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="form-group">
                    <label for="email" className="py-1 ">
                        Email address
                    </label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email@exmaple.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="form-group">
                    <label for="message" className="py-1 ">
                        Message
                    </label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="inquiries about anything goes here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="3"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleFormSubmit}
                    class="bg-blue-500 hover:bg-white hover:text-blue-500 border border-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    id='form-btn'
                >
                    Send
                </button>

                <p>{status}</p>
            </form>
            </div>
        </div>
    )
}
