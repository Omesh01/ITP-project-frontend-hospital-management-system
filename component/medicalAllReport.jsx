import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function AllReport(){

    const [reports, setReportt] = useState([]);

    useEffect(()=>{
        function getReport(){
        axios.get("http://localhost:8040/report/get").then((res)=>{
            setReportt(res.data.payload);
            console.log(res.data.payload);
            console.log(res.data.payload.picture);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getReport();
    },[reports])

    
    //serach 
    
    const [serQuary,setSerQuary]=useState("");

    function searchIncome(event){
          setSerQuary(event.target.value);
    }
  
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
            <h2>All Medical Reports  </h2></center>
            
           
            
                <div>
                    <div style={{ padding: '30px'}}>
                    <Link to="/addReport">
                     <button type="button2" class="btn btn-info"> Add </button>
                    </Link>
                    </div>
                <center>
            
                    {reports.filter( e => 
                        e.report_id.includes(serQuary) ||
                        e.report_id.toLowerCase().includes(serQuary) ||
                        e.report_id.toLowerCase().includes(serQuary))
                    .map(report => ( 
                        <Card style={{ width: '50%' }}>
                        <Card.Img variant="top" src={require(`../../../backend/UploadImage/reports/${report.picture}`)}  width="100%" />
                        <Card.Body>
                            <Card.Title>Report ID - {report.report_id}</Card.Title>
                            <Card.Title>Doctor Name - {report.doctor_name}</Card.Title>
                            <Card.Title>Date - {report.date}</Card.Title>
                            <Card.Text>
                            {report.illness}
                            </Card.Text>
                            <Link to={"/GetOneMedical/"+report._id} className="btn btn-outline-dark">More Details</Link>
                        </Card.Body>
                        </Card>
                       
                        ))}
                    
                    </center>
                    <br></br>
                </div>
                    
           
             <center><Link to="/medical/report">
                <button type="button2" class="btn btn-outline-success"> Generate Report</button>
            </Link></center> <br></br><br></br>
        </div>
  );
}

