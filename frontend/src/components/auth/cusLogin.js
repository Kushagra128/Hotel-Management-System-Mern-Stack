import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';
import "./cuslogin.css"


export default function CusLogin() {

    const [isLoading, setLoading] = useState(false);
    const [cusemail, setcusemail] = useState("");
    const [password, setpassword] = useState("");



    async function loginData(e) {
        setLoading(true)
        try {
            const loginDetails = { cusemail, password }
            const data = (await axios.post("http://localhost:5000/customer/login", loginDetails)).data
            console.log(data)
            if (data.status.role === 'customer') {
                window.location = '/rooms'
            } else {
                window.location = '/dashboard'
            }

        } catch (e) {
            alert('unautherized user')
        }
    }

    return (
        <section class="vh-100">

            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div class="text-center mb-3">
                            <h3><b>Login in with:</b></h3>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button type="button" class="btn btn-link btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                        <hr />
                        <center>
                            <p>OR</p>
                        </center>

                        <form>
                            <h3 mb-5>Login</h3>

                            <div class="form-outline mb-4 mt-5">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Email" required
                                    onChange={(e) => { setcusemail(e.target.value) }} />
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password" required
                                    onChange={(e) => { setpassword(e.target.value) }} />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" class="btn btn-primary btn-lg" onClick={(e) => { loginData(e) }}>Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0 mx-5">Don't have an account? <a href="/cusreg"
                                    class="link-primary">Register</a></p>
                            </div>


                        </form>
                    </div>

                </div>

            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">

                <div class="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>



                <div>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#!" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#!" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </section>
    )
}
