import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { name, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }

    const handleReset = () => {
        // Clear form fields and error message
        setName("");
        setPassword("");
    };


    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white">
                            <div class="card-body p-5 text-center">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your Name and Password!</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="name" class="form-control form-control-lg" onChange={(e) => setName(e.target.value)} />
                                        <label class="form-label" for="typeEmailX">Name</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
                                        <label class="form-label" for="typePasswordX" >Password</label>
                                    </div>

                                    <button class="btn btn-outline-light btn-lg px-5" type="reset" onClick={handleReset}>Reset</button>
                                    <br></br>
                                    <br></br>
                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                    <br></br>
                                    <br></br>
                                    <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Register</a>
                                    </p>

                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-dark text-white text-center py-3 position-sticky bottom-0">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} IT Department | Ministry of Agriculture</p>
        </div>
      </footer>

        </section>
    )
}


export default Login;