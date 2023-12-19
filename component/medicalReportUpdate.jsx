import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link,useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function MedicalReportUpdate() {

    const [report_id, setReportId] = useState('')
    const [doctor_name, setDoctorname] = useState('')
    const [illness, setIllness] = useState('')
    const [date, setDate] = useState('')
    const [picture, setPicture] = useState('')
    const navigate = useNavigate();
    
    const {id} = useParams();
    
    const getReport = () => {
        axios.get("http://localhost:8040/report/get/"+id)
        .then((res) => {
            const Report = {
                report_id: res.data.payload.report_id,
                doctor_name: res.data.payload.doctor_name,
                illness: res.data.payload.illness,
                date: res.data.payload.date,
                picture: res.data.payload.picture
            }

            // console.log(res.data);
            console.log(res.data.payload.picture);
            setReportId(Report.report_id);
            setDoctorname(Report.doctor_name);
            setIllness(Report.illness);
            setDate(Report.date);
            setPicture(Report.picture);
            //setReport(res.data.payload._id)
        })
        .catch((err) => {
            alert(err.message);
        });
    }

    useEffect(() => getReport(), []);
   
    return (
          <div style={{background: "linear-gradient(to bottom, #ffffff, #add8e6, #378cab)",
            minHeight: "100vh",}}>
            <div className="form-style-5"> 
            <form  onSubmit={(e) => {
                            e.preventDefault();

                            const form =new FormData();

                            form.append('doctor_name', doctor_name);
                            form.append('illness', illness);
                            form.append('date', date);
                            form.append('picture', picture);
                        
                                    
                            axios.put("http://localhost:8040/report/update/"+id, form)
                            .then(() => {
                                toast.success('Report Added')
                                navigate('/allreport');
                            })
                            .catch((err) => {
                                alert(err);
                            })

                            
                            setDoctorname('')
                            setIllness('')
                            setDate('')
                            setPicture('')
                        }}>

                <div className="container"> <br/>
            <center><h1>Update Report</h1></center>
            <br></br><br></br>
            <div></div>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Report ID</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Auto Genarated" readOnly/>
                </div>
            </div><br/>

           

            <div className="form-group row">
                <label htmlFor="attendace" className="col-sm-2 col-form-label">Doctor Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" value={doctor_name} onChange={(e)=>{
                    setDoctorname(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="inTime" className="col-sm-2 col-form-label">Illness</label>
                <div className="col-sm-8">
                <input type="text" className="form-control"  value={illness} onChange={(e)=>{
                    setIllness(e.target.value);
                }}/>
                </div>
            </div><br/>

            <div className="form-group row">
                <label htmlFor="outTime" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control" value={date} onChange={(e)=>{
                    setDate(e.target.value);
                }}/>
                </div>
            </div><br/>
            <div className="form-group row">
            <label htmlFor="outTime" className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-8">
                <input type="file" className="form-control" 
                onChange={(e) => { setPicture(e.target.files[0]); }}/>
                </div></div>
            <br/>
            <center><button type="submit" className="btn btn-secondary" >Submit</button></center><br/>
            <Link to="/allreport">
                     <button type="button2" class="btn btn-danger"> Back </button>
            </Link>
            </div>
                </form>
                </div>
                </div>
                
    );
};

export default MedicalReportUpdate;