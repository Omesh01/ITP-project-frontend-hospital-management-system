import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


export default function AllAttendace(){

    const [attendances, setAttendance] = useState([]);

    useEffect(()=>{
        function getAttendance(){
        axios.get("http://localhost:8040/attendance/get").then((res)=>{
            setAttendance(res.data);
            console.log(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getAttendance();
    },[attendances])

    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8040/attendance/delete/${e._id}`).then((res)=>{
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }
    //serach 
    
    const [serQuary,setSerQuary]=useState("");

    function searchIncome(event){
          setSerQuary(event.target.value);
    }
  

             /*   .filter(e=>

            e.employee_id.includes(serQuary) ||
            e.employee_id.toLowerCase().includes(serQuary) ||
            e.date.toLowerCase().includes(serQuary))
*/


    //console.log(serQuary);

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
            <h2>All Attendance and Salary  </h2></center>
            
            
                <div>
                    <div style={{ padding: '30px'}}>
                    <Link to="/attendace">
                     <button type="button2" class="btn btn-success"> Add </button>
                    </Link>
                    </div>
<center>
                    
                <table class="table table-bordered table-hover table-secondary">
                    <thead>
                        <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Attendance</th>
                        <th scope="col">InTime</th>
                        <th scope="col">OutTime</th>
                        <th scope="col">Details</th>
                        <th scope="col">Total Hours</th>
                        <th scope="col">Salary</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {attendances.filter( e => 
                        e.user_id.includes(serQuary) ||
                        e.user_id.toLowerCase().includes(serQuary) ||
                        e.user_id.toLowerCase().includes(serQuary))
                    .map(attendance => ( 
                        <tr>
                        <th scope="row">{attendance.user_id}</th>
                        <td>{attendance.attendance}</td>
                        <td>{attendance.inTime}</td>
                        <td>{attendance.outTime}</td>
                        <td>{attendance.details}</td>
                        <td>{attendance.total_hours}</td>
                        <td>{attendance.salary}</td>
                        <td><Link to={"/update/"+attendance._id} className="btn btn-dark">Update</Link></td>
                        <td><button className="btn btn-outline-danger"  onClick={() => {deleteDataC(attendance)}}>Delete</button></td>
                       </tr>
                        ))}
                    </tbody>
                    </table>
                    </center>
                    <br></br>
                </div>
                    
           
             <center><Link to="/attendance/report">
                <button type="button2" class="btn btn-secondary"> Generate Report</button>
            </Link></center> <br></br><br></br>
        </div>
  );
}

