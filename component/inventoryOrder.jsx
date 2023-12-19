import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export default function InventoryOrder(){

    const [company_name, setCompanyName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [model_number, setModelNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate();
    
    function sendData(e){
         
        const newOrder = {
            company_name, 
            brand,
            model,
            model_number,
            quantity
        }
        console.log(newOrder)
        axios.post("http://localhost:8040/order/add",newOrder).then(() => {
            toast.success("Successfully Added");
            navigate('/inventory');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #00008b)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Inventory Order</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Company Name</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Enter the Company Name" onChange={(e) => setCompanyName(e.target.value)} />
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Brand " onChange={(e)=>{
                    setBrand(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Model</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  placeholder="Enter the In Time" onChange={(e)=>{
                    setModel(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Model Number</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Out Time" onChange={(e)=>{
                    setModelNumber(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-8">
                <input type="number" className="form-control" placeholder="Enter the Detils" onChange={(e)=>{
                    setQuantity(e.target.value);
                }}/>
                </div>
            </div><br/>

           
            <center><button type="submit" className="btn btn-primary" >Submit</button></center><br/>
            <Link to="/inventory">
                     <button type="button2" class="btn btn-info"> Back </button>
            </Link>
            </div>
            </form><br></br>
            </div>
            <hr/></div>
    )

}