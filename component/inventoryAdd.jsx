import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';

const AddInventory = () => {

    const [inventory_id, setInventoryID] = useState('')
    const [inventory_type, setInventoryType] = useState('')
    const [item_name, setItemName] = useState('')
    const [location, setLocation] = useState('')
    const [update_date, setUpdateDate] = useState('')
    const [status, setStatus] = useState('')
   
    const navigate = useNavigate();

    const sendData = (e) => {
       
        e.preventDefault();

        if (inventory_id === '') {
            toast.error("Please Provide Inventory ID..", {
                id: 'IDI'
            })
        }
        else if (inventory_type === '') {
            toast.error("Please Provide Inventory Type..", {
                id: 'Itp'
            })
        }
        else if (item_name === '') {
            toast.error("Please Provide Item Name..", {
                id: 'Iname'
            })
        }else if (location === '') {
            toast.error("Please Provide Location..", {
                id: 'ILocation'
            })
        }else if (update_date === '') {
            toast.error("Please Provide Update Date..", {
                id: 'IUp'
            })
        }else if (status === '') {
            toast.error("Please Provide Status..", {
                id: 'Is'
            })
        }
        
       else if ( inventory_id !== '' && inventory_type !== '' && item_name !== '' && location !== '' && update_date !== ''  && status !== ''  ) {
        
        const newInventory = {
            inventory_id, 
            inventory_type,
            item_name,
            location,
            update_date,
            status
        }
        
            axios.post("http://localhost:8040/inventory/add",newInventory).then(()=>{
                toast.success("Successfully Added");
                navigate('/allAttendace');
            }).catch(()=>{
                toast.error("Something Went Wrong");
            })

            setInventoryID('')
            setInventoryType('')
            setItemName('')
            setLocation('')
            setUpdateDate('')
            setStatus('')
        }

    }

    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Add Inventory</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Inventory ID</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder='Enter the Inventory ID' onChange={(e)=>{
                    setInventoryID(e.target.value);
                }}/>
                </div>
            </div><br/>

           

            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Inventory Type </label>  
            
            <select onChange={(e)=>{
                    setInventoryType(e.target.value);
                }} className="col-sm-1"> 
       
            <option value = "Select"> Select   
            </option> 
            <option value = "Medical"> Medical   
            </option>
            <option value = "Surgery"> Surgery
            </option>  
            <option value = "Lab"> Lab  
            </option>      
            </select>
            </div>  <br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Item Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  placeholder="Enter the Item Name" onChange={(e)=>{
                    setItemName(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Item Location</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Item Location" onChange={(e)=>{
                    setLocation(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Update Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control" placeholder="Enter the Updated Date" onChange={(e)=>{
                    setUpdateDate(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Status" onChange={(e)=>{
                    setStatus(e.target.value);
                }}/>
                </div>
            </div><br/>
            
            <center><button type="submit" className="btn btn-dark" >Submit</button></center><br/>
            <Link to="/inventory">
                     <button type="button2" class="btn btn-outline-danger"> Back </button>
            </Link>
            </div>
            </form><br></br>
            </div>
            <hr/></div>

    )
}

export default AddInventory;