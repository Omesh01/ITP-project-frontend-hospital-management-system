import React, {useState} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AddAttendance(){

    const [user_id, setUserId] = useState("");
    const [attendance, setAttendance] = useState("");
    const [inTime, setInTime] = useState("");
    const [outTime, setOutTime] = useState("");
    const [details, setDetails] = useState("");
    const [total_hours, setTotalHours] = useState("");
    const salary= total_hours;
    const navigate = useNavigate();

    function sendData(e){

        e.preventDefault();
        if (user_id === '') {
            toast.error("Please Choose User ID..", {
                id: 'name'
            })
        }else if (attendance === '') {
            toast.error("Please Choose Attendance..", {
                id: 'name'
            })
        }else if (inTime === '') {
            toast.error("Please Choose In Time..", {
                id: 'name'
            })
        }else if (outTime === '') {
            toast.error("Please Choose Out Time..", {
                id: 'name'
            })
        }else if (details === '') {
            toast.error("Please Choose Details..", {
                id: 'name'
            })
        }else if (total_hours === '') {
            toast.error("Please Choose Total Hours..", {
                id: 'name'
            })
        }else if(user_id !== '' && attendance !== '' && inTime !== '' && outTime !== '' &&  details !== '' && total_hours !== ''){
        
        const newAttendace = {
            user_id, 
            attendance,
            inTime,
            outTime,
            details,
            total_hours,
            salary
        }
        console.log(newAttendace)
        axios.post("http://localhost:8040/attendance/add",newAttendace).then(() => {
            toast.success("Success");
            navigate('/inventory');

        }).catch((err) => {
            toast.success("UnSuccess");
        })

        setUserId('')
        setAttendance('')
        setInTime('')
        setOutTime('')
        setDetails('')
        setTotalHours('')
    }
}


    return (
        <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
        minHeight: "100vh",}}>
        <div className="form-style-5"> 
        <form onSubmit={sendData} >
            <div className="container"> <br/>
            <center><h1>Mark Attendance and Salary</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">User ID</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Enter the User ID " onChange={(e) => setUserId(e.target.value)} />
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Attendance</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Attendace " onChange={(e)=>{
                    setAttendance(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">In Time</label>
                <div className="col-sm-8">
                <input type="time" className="form-control"  placeholder="Enter the In Time" onChange={(e)=>{
                    setInTime(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Out Time</label>
                <div className="col-sm-8">
                <input type="time" className="form-control" placeholder="Enter the Out Time" onChange={(e)=>{
                    setOutTime(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="detils" className="col-sm-2 col-form-label">Details</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter the Details" onChange={(e)=>{
                    setDetails(e.target.value);
                }}/>
                </div>
            </div><br/>

           
            <div cclassName="form-group row">
            <label htmlFor="hourse" className="col-sm-2 col-form-label">Hours </label>  
            
            <select onChange={(e)=>{
                    setTotalHours(e.target.value);
                }} className="col-sm-1"> 
       
            <option value = "500"> 1   
            </option> 
            <option value = "750"> 2   
            </option>  
            <option value = "800"> 3   
            </option>    
            <option value = "1000"> 4   
            </option> 
            <option value = "1500"> 5   
            </option>  
            <option value = "1800"> 6   
            </option>
            <option value = "2000"> 7   
            </option>  
            <option value = "2200"> 8   
            </option>
            
            </select>
            </div>  <br/>

            <div className="form-group row">
                <label htmlFor="age" className="col-sm-2 col-form-label">Salary</label>
                <div className="col-sm-8">
                <input type="number" value={total_hours} className="form-control" />
                </div>
            </div><br/>


            <center><button type="submit" className="btn btn-dark" >Submit</button></center><br/>
            <Link to="/allAttendace">
                     <button type="button2" class="btn btn-outline-danger"> Back </button>
            </Link>
            </div>
            </form><br></br>
            </div>
            </div>
    )

}