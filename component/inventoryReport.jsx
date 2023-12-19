import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";

const InventoryReport = () => {
  
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    function getInventory() {
      axois
        .get("http://localhost:8040/inventory/get")
        .then((res) => {
          console.log(res.data);
          setInventory(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getInventory();
  }, []);
  return (

   <div style={{ backgroundSize:"container"}}> <br></br> 
                <div className="col" style={{display: 'flex',justifyContent: 'flex-end'}}>
                    <Button
                        variant="primary"
                        onClick={() => {
                        window.print();
                        }}
                    >
                        Print Report
                    </Button>
        </div>
            <center>
            <h2>All Inventory  </h2></center><br></br>
            
            
                <div><center>
                    
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Inventory ID</th>
                        <th scope="col">Inventory Type</th>
                        <th scope="col">Inventory Name</th>
                        <th scope="col">Loaction</th>
                        <th scope="col">Update Date</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {inventories.map(inventory => ( 
                        <tr>
                        <td>{inventory.inventory_id}</td>
                        <td>{inventory.inventory_type}</td>
                        <td>{inventory.item_name}</td>
                        <td>{inventory.location}</td>
                        <td>{inventory.update_date}</td>
                        <td>{inventory.status}</td>
                        </tr> 
                        
                        ))}
                    </tbody>
                    </table>
                    </center>
                    <br></br>
                </div>
                    
           
            <br></br>
        </div>
  );
};
export default InventoryReport;
