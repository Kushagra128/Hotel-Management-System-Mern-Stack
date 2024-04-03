import React, { useState, useEffect } from 'react'
import SoloAlert, { confirm } from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';
import "./cuslogin.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function AddReg() {

    const [isLoading, setLoading] = useState(false);

    const [cusname, setcusname] = useState("");
    const [cusemail, setcusemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [password, setpassword] = useState("");
    const [Confirmpw, setconfirmpw] = useState("");



    async function submitData(e) {
        setLoading(true)
        try {
            e.preventDefault();
            if (password != Confirmpw) {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "Password Mismatch!",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },
                });
            }
            else
                if (!cusname || !cusemail || !phoneno || !password) {
                    SoloAlert.alert({
                        title: "Oops!",
                        body: "Please fill all fields",
                        icon: "warning",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {

                        },
                    });
                } else {
                    //role
                    let role = 'admin'
                    const newDetails = { cusname, cusemail, phoneno, password, role }

                    //db
                    const data = (await axios.post("http://localhost:5000/customer/", newDetails)).status
                    if (data === 200) {
                        SoloAlert.alert({
                            title: "Welcome!",
                            body: "Registered Succesfully",
                            icon: "success",
                            theme: "dark",
                            useTransparency: true,
                            onOk: function () {

                            },
                        });
                    }

                }
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    function clear() {

    }



    return (
        <section class="vh-100">

            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://www.linkpicture.com/q/hotel_staff_05.jpg"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h3>Register</h3>
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
                        <form>

                            <div class="form-outline mb-3">
                                <input type="text" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Name" required
                                    onChange={(e) => { setcusname(e.target.value) }} />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="email" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Email" required
                                    onChange={(e) => { setcusemail(e.target.value) }} />
                            </div>


                            <div class="form-outline mb-3">
                                {/* <PhoneInput 
                                    placeholder="Enter Phone Number" type="textarea" class="form-control" id="validationTooltip03"
                                    value={phoneno}
                                    onChange={setphoneno}/> */}


                                <input type="number" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Phone Number" required
                                    onChange={(e) => { setphoneno(e.target.value) }} />
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password" required
                                    onChange={(e) => { setpassword(e.target.value) }} />
                            </div>
                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Confirm Password" onChange={(e) => { setconfirmpw(e.target.value) }} />
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2 d-flex justify-content-start">
                                <button type="button" class="btn btn-primary btn-lg" onClick={(e) => { submitData(e) }}
                                    disabled={isLoading} > Register</button>

                                <p class="small fw-bold mt-2 pt-1 mb-0 mx-5">Already have account? <a href="/cuslogin"
                                    class="link-danger">Login</a></p>
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




            </div>
        </section>
    )
}
