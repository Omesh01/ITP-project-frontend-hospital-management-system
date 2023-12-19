import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";

const MedicalReport = () => {
  
  const [reports, setReport] = useState([]);

  useEffect(() => {
    function getReport() {
      axois
        .get("http://localhost:8040/report/get")
        .then((res) => {
          console.log(res.data);
          setReport(res.data.payload);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getReport();
  }, []);
  return (

    <div style={{ backgroundSize:"container" , backgroundColor:"lightblue"}}> <br></br> 
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
<h2>Medical REPORT  </h2></center>
    <div>
       
    <center>
        
    <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">Report ID</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Illness</th>
            <th scope="col">Date</th>
            <th scope="col">Report</th>
            </tr>
        </thead>
        <tbody>
        {reports.map(report => ( 
            <tr>
            <th scope="row">{report.report_id}</th>
            <td>{report.doctor_name}</td>
            <td>{report.illness}</td>
            <td>{report.date}</td>
            <td><img src={require(`../../../backend/UploadImage/reports/${report.picture}`)}  width="50%"/></td>
           </tr>
            ))}
        </tbody>
        </table>
        </center>
        <br></br>
    </div>
       
</div>
  );
};
export default MedicalReport;
