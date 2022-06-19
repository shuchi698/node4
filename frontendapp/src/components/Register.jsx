import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import axios from 'axios';


const Register = () => {

    const [details, setDetails] = useState({
        name: "",
        number: "",
        email: "",
        password: ""
    });

    // const [users, setUsers] = useState([]);

    const callApi = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8080/api/auth/register", details)
            .then(response => {
                console.log("Successfully Sent Details")
            })
            .catch(err => {
                console.log(err);
            })

        setDetails({
            name: "",
            number: "",
            email: "",
            password: ""
        })

    }


    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className='container'>
                <Header />
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input
                        type="text"
                        name='name'
                        value={details.name}
                        onChange={handleChange}
                        id='name'
                        placeholder='Enter your name'
                        required
                    /> <br />

                    <label htmlFor="number">Phone Number</label> <br />
                    <input
                        type="tel"
                        name='number'
                        value={details.number}
                        onChange={handleChange}
                        id='number'
                        placeholder='Enter your Phone Number'
                        required
                    /> <br />

                    <label htmlFor="email">Email</label> <br />
                    <input
                        type="email"
                        name='email'
                        value={details.email}
                        onChange={handleChange}
                        id='email'
                        placeholder='Enter your Email'
                        required
                    /> <br />

                    <label htmlFor="password">Password</label> <br />
                    <input
                        type="password"
                        name='password'
                        value={details.password}
                        onChange={handleChange}
                        id='password'
                        placeholder='Enter your Password'
                        required
                    /> <br />

                    <button type='submit' className='submit-btn' onClick={callApi} >Register</button>
                </div>
            </div>
        </>
    )
}

export default Register;