import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function GetOneMedical() {

    const [report_id, setReportID] = useState("");
    const [doctor_name, setDoctorName] = useState("");
    const [illness, setIllness] = useState("");
    const [date, setDate] = useState("");
    const [picture, setPicture] = useState("");
    const [report,setReport] = useState("");
    const navigate = useNavigate();
    const imageUrl = `http://localhost:8040/${picture}`;
    const {id} = useParams();
    
    const getAttendance = () => {
        axios.get("http://localhost:8040/report/get/"+id)
        .then((res) => {
            const report = {
                report_id: res.data.payload.report_id,
                doctor_name: res.data.payload.doctor_name,
                illness: res.data.payload.illness,
                date: res.data.payload.date,
                picture: res.data.payload.picture
            }

            console.log(res.data.payload);
            setReportID(report.report_id);
            setDoctorName(report.doctor_name);
            setIllness(report.illness);
            setDate(report.date);
            setPicture(report.picture);
            setReport(res.data.payload._id)
           
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getAttendance(), []);

    const deleteDataC = (e) =>{
        var result = window.confirm("Are you sure?");
      if(result == true){
          axios.delete(`http://localhost:8040/report/delete/${e}`).then((res)=>{
            toast.success('Deleted');
            navigate('/allreport')
          }).catch(e =>{
              alert(e)
          })
      }else{
          e.preventDefault();
      }
    
    }


    return (
          <div style={{ backgroundSize:"container" , backgroundColor:"#e9f4f8"}}>
            <br></br>
            
            <center>
            <h5>Report ID - {report_id}</h5> <br></br>
            <div class="card" style={{width:"28rem"}}>
            <div class="card-body">
                
                <p class="card-text">Illness- {illness}</p>
            </div>
            
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4">Doctor Name - {doctor_name}</li>
                <li class="list-group-item px-4">Date - {date}</li>
            </ul>
            <div class="card-body">
            <Link to={"/report/"+report} className="btn btn-warning">Update</Link>
                
            <button className="btn btn-danger"  onClick={() => {deleteDataC(report)}}>Delete</button>
               
            </div>
            
            </div></center> <br></br>
            <center>
            <Link to="/allreport">
                     <button type="button2" class="btn btn-dark"> Back </button>
            </Link></center>
            <br></br>
            <br></br>  </div>
             
    );
};

export default GetOneMedical;