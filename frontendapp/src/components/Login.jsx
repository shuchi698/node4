import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import axios from 'axios';


const Login = () => {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const callApi = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8080/api/auth/login", details)
            .then(response => {
                console.log("Successfully Sent Details")
                console.log(response.data.token)
                localStorage.setItem("userInfo", JSON.stringify(response.data.token))
            })
            .catch(err => {
                console.log(err);
            })

        setDetails({
            email: "",
            password: ""
        })

    }


    return (
        <>
            <div className='container'>
                <Header />

                <div>
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

                    <button type='submit' className='submit-btn' onClick={callApi}>Login</button>
                </div>
            </div>

        </>
    )
}

export default Login;