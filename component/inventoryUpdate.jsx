import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function InventoryUpdate() {

    const [inventory_id, setInventoryID] = useState('')
    const [inventory_type, setInventoryType] = useState('')
    const [item_name, setItemName] = useState('')
    const [location, setLocation] = useState('')
    const [update_date, setUpdateDate] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate();
    
    const {id} = useParams();
    
    const getInventory = () => {
        axios.get("http://localhost:8040/inventory/get/"+id)
        .then((res) => {
            const Inventory = {
                inventory_id: res.data.inventory_id,
                inventory_type: res.data.inventory_type,
                item_name: res.data.item_name,
                location: res.data.location,
                update_date: res.data.update_date,
                status: res.data.status
            }

            console.log(res.data);
            setInventoryID(Inventory.inventory_id);
            setInventoryType(Inventory.inventory_type);
            setItemName(Inventory.item_name);
            setLocation(Inventory.location);
            setUpdateDate(Inventory.update_date);
            setStatus(Inventory.status);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getInventory(), []);

    return (
          <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
            minHeight: "100vh",}}>
            <div className="form-style-5"> 
            <form  onSubmit={(e) => {
                            e.preventDefault();

                            
                        const newInventory = {
                            inventory_id, 
                            inventory_type,
                            item_name,
                            location,
                            update_date,
                            status
                            }
                                    
                            axios.put("http://localhost:8040/inventory/update/"+id, newInventory)
                            .then(() => {
                                toast.success('Inventory Updated');
                                navigate('/inventory');
                            })
                            .catch((err) => {
                                alert(err);
                            })
                        }}>
                <div className="container"> <br/>
            <center><h1>Update Inventory</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Inventory ID</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" value={inventory_id} onChange={(e)=>{
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
                <input type="text" className="form-control"  value={item_name} onChange={(e)=>{
                    setItemName(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Item Location</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" value={location} onChange={(e)=>{
                    setLocation(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Update Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control" value={update_date} onChange={(e)=>{
                    setUpdateDate(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Status</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" value={status} onChange={(e)=>{
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
                
    );
};

export default InventoryUpdate;