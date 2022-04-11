import React, { useState, useEffect } from 'react'
import SoloAlert from 'soloalert'
import { useParams } from "react-router";
import axios from 'axios';


export default function ViewOneRoom() {

    const [isLoading, setLoading] = useState(false);

    const [textState, setTextState] = useState(true);
    const [btngrpState1, setBtnGroupstate1] = useState(true);
    const [btngrpState2, setBtnGroupstate2] = useState(false);



    const [loaderStatus, setLoaderStatus] = useState(false);
    const [tebleStatus, setTableStatus] = useState(true);



    const [roomname, setRoomname] = useState("");
    const [noofguests, setNoofguests] = useState("");
    const [roomtype, setRoomtype] = useState("");
    const [facilities, setFacilities] = useState("");
    const [rentpd, setRentpd] = useState("");
    const [description, setDescription] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [url3, setUrl3] = useState("");


    const { id } = useParams();

    //This useEffect function used to get room data
    useEffect(() => {
        async function getDetails() {
            try {
                const result = await (await axios.get(`http://localhost:5000/room/${id}`)).data.data
                setRoomname(result[0].roomname);
                setNoofguests(result[0].noofguests)
                setRoomtype(result[0].roomtype);
                setFacilities(result[0].facilities)
                setRentpd(result[0].rentpd);
                setDescription(result[0].description)
                setUrl1(result[0].url1);
                setUrl2(result[0].url2)
                setUrl3(result[0].url3);

                setLoaderStatus(true)
                setTableStatus(false)
                console.log(roomname, roomtype)
            } catch (err) {
                console.log(err.message)
            }
        }

        getDetails();
    }, [])


    async function updateData(e) {

        try {
            e.preventDefault();
            const newDetails = {
                roomname, noofguests, roomtype, facilities, rentpd, description, url1, url2, url3
            }
            const data = await (await axios.put(`http://localhost:5000/room/${id}`, newDetails)).status
            if (data === 200) {
                SoloAlert.alert({
                    title: "Welcome!",
                    body: "Details added successfully",
                    icon: "success",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },
                });
            } else {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "Something went wrong.. plz try again later",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },
                });
            }
        } catch (err) {

        }

    }

    function edit(e) {
        e.preventDefault();
        setTextState(false)
        setBtnGroupstate1(false)
        setBtnGroupstate2(true)
    }

    function cancel(e) {
        e.preventDefault();
        setTextState(true)
        setBtnGroupstate1(true)
        setBtnGroupstate2(false)
    }


    //This function is used to delete specific user
    function deleteUser(e) {
        e.preventDefault();

        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    const result = await (await axios.delete(`http://localhost:5000/room/${id}`)).status
                    console.log(result)

                    if (result === 200) {
                        SoloAlert.alert({
                            title: "Welcome!",
                            body: "Deletion is successful",
                            icon: "success",
                            theme: "dark",
                            useTransparency: true,
                            onOk: function () {
                                window.location = "#"
                            },

                        });
                    }
                } catch (err) {
                    SoloAlert.alert({
                        title: "Oops!",
                        body: "Something went wrong",
                        icon: "error",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {

                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })
    }
    return (
        <div class="content">

            <div class="d-flex justify-content-center" >
                <div class="spinner-border" role="status" style={{ width: "10rem", height: "10rem" }} hidden={loaderStatus}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>


            <div hidden={tebleStatus}>
                <h3>Edit-Room-Details</h3><hr />
                <form class="row g-3 needs-validation" id="inputForm2" novalidate>
                    <div class="col-md-4 position-relative">
                        <label for="validationTooltip01" class="form-label">Name</label>
                        <input type="text" class="form-control" id="validationTooltip01" required
                            onChange={(e) => { setRoomname(e.target.value) }} />
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="validationTooltip02" class="form-label">No of Guests</label>
                        <input type="number" class="form-control" id="validationTooltip02" required
                            onChange={(e) => { setNoofguests(e.target.value) }} />
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="validationTooltip04" class="form-label">Type</label>
                        <select class="form-select" id="validationTooltip04" required onChange={(e) => { setRoomtype(e.target.value) }}>
                            <option selected disabled value="">Choose...</option>
                            <option>Delux</option>
                            <option>Non-Delux</option>
                        </select>
                    </div>


                    <div class="col-md-3 position-relative">
                        <label for="validationTooltip01" class="form-label">Facilities</label>
                        <input type="text" class="form-control" id="validationTooltip01" required
                            onChange={(e) => { setFacilities(e.target.value) }} />
                    </div>



                    <br />
                    <div class="col-md-5 position-relative">
                        <label for="validationTooltip03" class="form-label">Rent per Day(Rs.)</label>
                        <input type="text" class="form-control" id="validationTooltip03" required
                            onChange={(e) => { setRentpd(e.target.value) }} />
                    </div>


                    <div class="col-md-4 position-relative">
                        <label for="validationTooltip03" class="form-label">Description</label>
                        <input type="textarea" class="form-control" id="validationTooltip03" required
                            onChange={(e) => { setDescription(e.target.value) }} />
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="validationTooltip03" class="form-label">Url 1</label>
                        <input type="text" class="form-control" id="validationTooltip03" required
                            onChange={(e) => { setUrl1(e.target.value) }} />
                    </div>

                    <div class="col-md-3 position-relative">
                        <label for="validationTooltip03" class="form-label">Url 2</label>
                        <input type="text" class="form-control" id="validationTooltip03" required
                            onChange={(e) => { setUrl2(e.target.value) }} />
                    </div>

                    <div class="col-md-3 position-relative">
                        <label for="validationTooltip03" class="form-label">Url 3</label>
                        <input type="text" class="form-control" id="validationTooltip03" required
                            onChange={(e) => { setUrl3(e.target.value) }} />
                    </div>


                    <div class="col-12" id="btngrp" hidden={btngrpState2} style={{ marginTop: "5%" }}>
                        <button type="submit" class="btn btn-primary" onClick={(e) => { edit(e) }}> <i className="far fa-edit"></i> EDIT</button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btn btn-danger" onClick={(e) => { deleteUser(e) }}><i class="fa fa-trash"></i>  DELETE</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
