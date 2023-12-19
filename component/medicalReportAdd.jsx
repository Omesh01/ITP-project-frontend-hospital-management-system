import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';

const AddReport = () => {

    const [report_id, setReportId] = useState('')
    const [doctor_name, setDoctorname] = useState('')
    const [illness, setIllness] = useState('')
    const [date, setDate] = useState('')
    const [picture, setPicture] = useState('')
   
    const navigate = useNavigate();

    const sendData = (e) => {
        console.log("hari")
        e.preventDefault();

        if (doctor_name === '') {
            toast.error("Please Provide a Doctor Name..", {
                id: 'bday'
            })
        }
        else if (illness === '') {
            toast.error("Please Provide a Illness..", {
                id: 'stafNo'
            })
        }
        else if (date === '') {
            toast.error("Please Provide a date..", {
                id: 'email'
            })
        }
        
       else if ( doctor_name !== '' && illness !== '' && date !== '') {
            const form =new FormData();

            form.append('doctor_name', doctor_name);
            form.append('illness', illness);
            form.append('date', date);
            form.append('picture', picture);


            axios.post("http://localhost:8040/report/add",form).then(()=>{
                toast.success("Successfully Added");
                navigate('/allreport');
            }).catch(()=>{
                toast.success("Something Went Wrong")
            })

            setDoctorname('')
            setIllness('')
            setDate('')
           
        }

    }
    const handleCatImg = (e) => {
        setPicture(e.target.files[0]);

    }

   

    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Add Medical Report</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Report ID</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder='Auto Generated' readOnly/>
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Doctor Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Doctor Name " onChange={(e)=>{
                    setDoctorname(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Illness</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  placeholder="Enter the Illness" onChange={(e)=>{
                    setIllness(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control" placeholder="Enter the Date" onChange={(e)=>{
                    setDate(e.target.value);
                }}/>
                </div>
            </div><br/>
            <div className="form-group row">
            <label htmlFor="outTime" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-8">
                <input type="file" className="form-control"  
                onChange={(e) => { handleCatImg(e) }}/>
                </div></div>
            <br/>
            <center><button type="submit" className="btn btn-secondary" >Submit</button></center><br/>
            <Link to="/allreport">
                     <button type="button2" class="btn btn-danger"> Back </button>
            </Link>
            </div>
            </form>
            </div>
            </div>

    )
}

export default AddReport;