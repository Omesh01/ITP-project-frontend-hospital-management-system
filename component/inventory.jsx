import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


export default function AllInventory(){

    const [inventories, setInventory] = useState([]);

    useEffect(()=>{
        function getInventory(){
        axios.get("http://localhost:8040/inventory/get").then((res)=>{
            setInventory(res.data);
            console.log(res.data.payload);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getInventory();
    },[inventories])

    
    //serach 
    
    const [serQuary,setSerQuary]=useState("");

    function searchIncome(event){
          setSerQuary(event.target.value);
    }
  
    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8040/inventory/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              
          })
      }else{
        
      }
    
    }

    return (
       
        <div style={{ backgroundSize:"container" , backgroundColor:"#e9f4f8"}}> <br></br> 
                <div style={{width: '90%', display: 'flex', justifyContent: 'flex-end'}}>
                    <input
                        onChange={searchIncome}
                        placeholder="Search....."
                        style={{
                        borderRadius: '5px',
                        padding: '10px',
                        border: 'none',
                        background: '#f2f2f2',
                        marginRight: '10px',
                        width: '200px',
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#333'
                        }}
                    />
                    {/* You can add any other elements here, if needed */}
                    </div>

            <center>


            <h2>Inventories Details </h2></center>
            
            
                <div>
                    <div style={{ padding: '30px'}}>
                    <Link to="/inventory/add">
                     <button type="button2" class="btn btn-info"> Add </button>
                    </Link>
                    </div>
                <center>
                    
                <table class="table table-bordered table-hover table-primary">
                    <thead >
                        <tr>
                        <th scope="col">Inventory ID</th>
                        <th scope="col">Inventory Type</th>
                        <th scope="col">Inventory Name</th>
                        <th scope="col">Loaction</th>
                        <th scope="col">Update Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {inventories.filter( e => 
                        e.inventory_id.includes(serQuary) ||
                        e.inventory_id.toLowerCase().includes(serQuary) ||
                        e.inventory_id.toLowerCase().includes(serQuary))
                    .map(inventory => ( 
                    
    
                        <tr>
                        <td>{inventory.inventory_id}</td>
                        <td>{inventory.inventory_type}</td>
                        <td>{inventory.item_name}</td>
                        <td>{inventory.location}</td>
                        <td>{inventory.update_date}</td>
                        <td>{inventory.status}</td>
                        <td><Link to={"/inventory/update/"+inventory._id} className="btn btn-success">Update</Link></td>
                        <td><button className="btn btn-danger"  onClick={() => {deleteDataC(inventory)}}>Delete</button></td>
                        </tr> 
                        
                        ))}
                    </tbody>
                    </table>
                    <Link to={"/inventory/order/report"} className="btn btn-outline-dark">Add Order</Link> <t></t>
                    <Link to={"/inventory/bill/report"} className="btn btn-outline-dark">Add Bill</Link>
                    
                    </center>
                    <br></br>
                </div>
                    
           
             <center><Link to="/inventory/report">
                <button type="button2" class="btn btn-outline-warning"> Generate Report</button>
            </Link></center> <br></br><br></br>
        </div>
  );
}

