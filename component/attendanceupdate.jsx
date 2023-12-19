import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link,useNavigate } from "react-router-dom";

function AttendanceUpdate() {

    const [user_id, setUserId] = useState("");
    const [attendance, setAttendance] = useState("");
    const [inTime, setInTime] = useState("");
    const [outTime, setOutTime] = useState("");
    const [details, setDetails] = useState("");
    const [total_hours, setTotalHours] = useState("");
    const salary= total_hours;
    const navigate = useNavigate();
    
    const {id} = useParams();
    
    const getAttendance = () => {
        axios.get("http://localhost:8040/attendance/get/"+id)
        .then((res) => {
            const updateAttendnce = {
                user_id: res.data.user_id,
                attendance: res.data.attendance,
                inTime: res.data.inTime,
                outTime: res.data.outTime,
                details: res.data.details,
                total_hours: res.data.total_hours,
                salary: res.data.salary
            }

            // console.log(res.data);
            setUserId(updateAttendnce.user_id);
            setAttendance(updateAttendnce.attendance);
            setInTime(updateAttendnce.inTime);
            setOutTime(updateAttendnce.outTime);
            setDetails(updateAttendnce.details);
            setTotalHours(updateAttendnce.total_hours);
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getAttendance(), []);

    return (
          <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #00008b)",
            minHeight: "100vh",}}>
            <div className="form-style-5"> 
            <form  onSubmit={(e) => {
                            e.preventDefault();

                            
                        const newAttendanve = {
                            user_id, 
                            attendance,
                            inTime,
                            outTime,
                            details,
                            total_hours,
                            salary
                            }
                                    
                            axios.put("http://localhost:8040/attendance/update/"+id, newAttendanve)
                            .then(() => {
                                alert("Attedance updated");
                                navigate('/allAttendace');
                            })
                            .catch((err) => {
                                alert(err);
                            })
                        }}>
                <div className="container"> <br/>
                <center><h1>Update Attendance</h1></center>
                <br></br><br></br>
                <div></div>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">User ID</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" value={user_id} onChange={(e) => setUserId(e.target.value)} />
                    </div>
                </div><br/>

            

                <div className="form-group row">
                    <label htmlFor="attendace" className="col-sm-2 col-form-label">Attendance</label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" value={attendance} onChange={(e)=>{
                        setAttendance(e.target.value);
                    }}/>
                    </div>
                </div><br/>

                <div className="form-group row">
                    <label htmlFor="inTime" className="col-sm-2 col-form-label">In Time</label>
                    <div className="col-sm-8">
                    <input type="time" className="form-control" value={inTime} onChange={(e)=>{
                        setInTime(e.target.value);
                    }}/>
                    </div>
                </div><br/>

                <div className="form-group row">
                    <label htmlFor="outTime" className="col-sm-2 col-form-label">Out Time</label>
                    <div className="col-sm-8">
                    <input type="time" className="form-control" value={outTime} onChange={(e)=>{
                        setOutTime(e.target.value);
                    }}/>
                    </div>
                </div><br/>

                <div className="form-group row">
                    <label htmlFor="details" className="col-sm-2 col-form-label">Details</label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" value={details}  onChange={(e)=>{
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


                <center><button type="submit" className="btn btn-primary" >Update</button></center><br/>
                <Link to="/allAttendace">
                        <button type="button2" class="btn btn-info"> Back </button>
                </Link>
                </div>
                </form><br></br>
                </div>
                <hr/></div>
                
    );
};

export default AttendanceUpdate;