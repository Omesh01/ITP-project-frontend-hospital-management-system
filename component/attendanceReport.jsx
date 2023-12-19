import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";

const AttendanceReport = () => {
  
  const [attendances, setAttendance] = useState([]);

  useEffect(() => {
    function getAttenance() {
      axois
        .get("http://localhost:8040/attendance/get")
        .then((res) => {
          console.log(res.data);
          setAttendance(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttenance();
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
            <h2>ALL ATTENDANCE  </h2></center><br></br>
            
            
                <div><center>
                    
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Attendance</th>
                        <th scope="col">InTime</th>
                        <th scope="col">OutTime</th>
                        <th scope="col">Details</th>
                        <th scope="col">Total Hours</th>
                        <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {attendances
                    .map(attendance => ( 
                        <tr>
                        <th scope="row">{attendance.user_id}</th>
                        <td>{attendance.attendance}</td>
                        <td>{attendance.inTime}</td>
                        <td>{attendance.outTime}</td>
                        <td>{attendance.details}</td>
                        <td>{attendance.total_hours}</td>
                        <td>{attendance.salary}</td>
                         </tr>
                        ))}
                    </tbody>
                    </table>
                    </center>
                    <br></br>
                </div>
                    
           
             <center><Link to="#">
                <button type="button2" class="btn btn-info"> Generate Report</button>
            </Link></center> <br></br><br></br>
        </div>
  );
};
export default AttendanceReport;
