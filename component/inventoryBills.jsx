import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';

const InventoryBill = () => {

    const [company_name, setCompanyName] = useState('')
    const [amount, setAmount] = useState('')
    const [billed_date, setBillDate] = useState('')
    const [cp_bill, setBillPicture] = useState('')
    const navigate = useNavigate();

    const sendData = (e) => {
        
        e.preventDefault()

        if (company_name === '') {
            toast.error("Please Choose Company Name..", {
                id: 'name'
            })
        }
        else if (amount === '') {
            toast.error("Please Provide a Ampunt..", {
                id: 'bday'
            })
        }
        else if (billed_date === '') {
            toast.error("Please Provide a Billed Date..", {
                id: 'stafNo'
            })
        }
        
       else if (company_name !== '' && amount !== '' && billed_date !== '') {
            const form =new FormData();


            form.append('company_name', company_name);
            form.append('amount', amount);
            form.append('billed_date', billed_date);
            form.append('cp_bill', cp_bill);
           
            axios.post("http://localhost:8040/bill/add",form).then(()=>{
                toast.success("Successfully Added");
                navigate('/inventory');
            }).catch(()=>{
                toast.success("Something Went Wrong")
            })

            setCompanyName('')
            setAmount('')
            setBillDate('')
            setBillPicture('')
        }

    }
    const handleCatImg = (e) => {
        setBillPicture(e.target.files[0]);

    }

   

    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #00008b)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Add Bill</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Company Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder='Enter the Company Name' onChange={(e)=>{
                    setCompanyName(e.target.value);
                }}/>
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Amount</label>
                <div className="col-sm-8">
                <input type="Number" className="form-control" placeholder="Enter the Amount " onChange={(e)=>{
                    setAmount(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Billed Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control"  placeholder="Enter the In Time" onChange={(e)=>{
                    setBillDate(e.target.value);
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
            <center><button type="submit" className="btn btn-primary" >Submit</button></center><br/>
            
            </div>
            </form><br></br>
            </div>
            <hr/></div>


    )
}

export default InventoryBill