import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';

const AddOrderReport = () => {

    const [company_name, setCompanyName] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [model_number, setModelNumber] = useState('')
    const [quantity, setQuantity] = useState('')
   
    const navigate = useNavigate();

    const sendData = (e) => {
        
        e.preventDefault();

        if (company_name === '') {
            toast.error("Please Provide a Company Name..", {
                id: 'bday'
            })
        }
        else if (brand === '') {
            toast.error("Please Provide a Brand..", {
                id: 'stafNo'
            })
        }
        else if (model_number === '') {
            toast.error("Please Provide a Model Number..", {
                id: 'email'
            })
        }
        else if (quantity === '') {
            toast.error("Please Provide a Quantity..", {
                id: 'email'
            })
        }
        
       else if ( company_name !== '' && brand !== '' && model_number !== '') {
            
        const order = {
            company_name,
            brand,
            model,
            model_number,
            quantity
        }

            axios.post("http://localhost:8040/order/add",order).then(()=>{
                toast.success("Successfully Added");
                navigate('/inventory');
            }).catch(()=>{
                toast.success("Something Went Wrong")
            })

            setCompanyName('')
            setBrand('')
            setModel('')
            setModelNumber('')
            setQuantity('')
        }

    }
   
    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Add Order</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Company Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder='Enter Company Name' onChange={(e)=>{
                    setCompanyName(e.target.value);
                }}/>
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Brand Name " onChange={(e)=>{
                    setBrand(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Model</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  placeholder="Enter the Model" onChange={(e)=>{
                    setModel(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Model Number</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  placeholder="Enter the Model Number" onChange={(e)=>{
                    setModelNumber(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-8">
                <input type="Number" className="form-control"  placeholder="Enter the Quantity" onChange={(e)=>{
                    setQuantity(e.target.value);
                }}/>
                </div>
            </div><br/>

            <br/>
           
            <center><button type="submit" className="btn btn-secondary" >Submit</button></center><br/>
            <Link to="/inventory">
                     <button type="button2" class="btn btn-danger"> Back </button>
            </Link>
            </div>
            </form>
            </div>
            </div>

    )
}

export default AddOrderReport;