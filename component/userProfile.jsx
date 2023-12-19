import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function OneUser  () {
   
    const {id} = useParams();
    const [user_id,setUserId] = useState('');
    const [name,setName] = useState('');
    const [birthday,setBirthday] = useState('');
    const [staff_no,setStaffNo] = useState('');
    const [email,setEmail] = useState('');
    const [Hash_password,setHashPassword] = useState('');
    const [gender,setGender] = useState('');
    const [tel_no,setTelNo] = useState('');
    const [ProfilePicture,setProfilePicture] = useState('');
    const [singlData,setSingleData] = useState('');
  
        const getUser = () => {
        axios.get(`http://localhost:8040/user/user/${id}`).then((res)=>{
            setUserId(res.data.user.user_id);
            setName(res.data.user.name);
            setBirthday(res.data.user.birthday);
            setStaffNo(res.data.user.staff_no);
            setEmail(res.data.user.email);
            setHashPassword(res.data.user.Hash_password);
            setGender(res.data.user.gender);
            setTelNo(res.data.user.tel_no);
           // setProfilePicture(res.data.user.);
            console.log(res.data.user.name)
            console.log(res.data.user.ProfilePicture.data)
            setSingleData(res.data.user.ProfilePicture)
           // console.log(singlData.payload.ProfilePicture.data)
             
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getUser(), []);
        
     
           const base64String = btoa(
                String.fromCharCode(...new Uint8Array(singlData.data))
              );  
              
             
              
   
   // imagePath = `../../../backend/UploadImage/${ProfilePicture}`
// Assuming the image file is located at ../../../Backend/uploads/myImage.jpg


   
//<img src={require(`../../../Backend/uploads/${ariticl.imag}`)} width={50}></img><br></br>C:\Users\sajindu shamalka\Desktop\VS codes\hospital management system\backend\UploadImage
    return (
        <div>
         <section class="vh-100" style={{backgroundColor:"#f4f5f7;"}}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-6 mb-4 mb-lg-0">
                    <div class="card mb-3" style={{borderRadius: ".5rem;"}}>
                    <div class="row g-0">
                        <div class="col-md-4 gradient-custom text-center text-white"
                        style={{borderTopLeftRadius: '.5rem;', borderBottomLeftRadius: ".5rem;"}}>
                        
                     
                        <img src={`data:image/png;base64,${base64String}`}
                            alt="Avatar" class="img-fluid my-5" style={{width: "80px;"}} />    
      
                        <h5>Hey, Welcome {name}</h5>
                        <p>Web Designer</p>
                        <i class="far fa-edit mb-5"></i>
                        </div>
                        
                        <div class="col-md-8">
                        <div class="card-body p-4">
                            <h6>Hey, {ProfilePicture}</h6>
                            <hr class="mt-0 mb-4"/>
                            <div class="row pt-1">
                            <div class="col-6 mb-3">
                                <h6>Email</h6>
                                <p class="text-muted">{email}</p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Staff ID</h6>
                                <p class="text-muted">{staff_no}</p>
                            </div>
                            </div>
                            <h6>Basic Info</h6>
                            <hr class="mt-0 mb-4"/>
                            <div class="row pt-1">
                            <div class="col-6 mb-3">
                                <h6>Birthday</h6>
                                <p class="text-muted">{birthday}</p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Gender</h6>
                                <p class="text-muted">{gender}</p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Telephone Number </h6>
                                <p class="text-muted">{tel_no}</p>
                            </div>
                            </div>
                            <div class="d-flex justify-content-start">
                            <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
</section>
        </div>
    )
}
export default OneUser;