import React from 'react';
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import axios from 'axios';
import I1 from "../images/bg1.jpeg";



const Signup = () => {

    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [staff_no, setStaffNo] = useState('')
    const [email, setEmail] = useState('')
    const [Hash_password, setHashPassword] = useState('')
    const [tel_no, setTelNo] = useState('')
    const [ProfilePicture, setpicture] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate();

    const sendData = (e) => {
        
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (name === '') {
            toast.error("Please Choose Title..", {
                id: 'name'
            })
        }
        else if (birthday === '') {
            toast.error("Please Provide a Birthday..", {
                id: 'bday'
            })
        }
        else if (staff_no === '') {
            toast.error("Please Provide a Contact No..", {
                id: 'stafNo'
            })
        }
        else if (email === '') {
            toast.error("Please Provide Your Email..", {
                id: 'email'
            })
        }
        else if (!emailRegex.test(email)) {
            toast.error("Please Provide a Valid Email...", {
                id: 'valEmail'
            })
        }
        else if (Hash_password === '') {
            toast.error("Please Provide a Password..", {
                id: 'pwd'
            })
        }
        else if (Hash_password.length < 8) {
            toast.error("Password should be at least 8 characters long", {
                id: 'pwdLength'
            })
        }else if (tel_no.length === '') {
            toast.error("Please Provide a Telphone Number..", {
                id: 'tel'
            })
        }else if (gender.length === '') {
            toast.error("Please Provide a Gender..", {
                id: 'gen'
            })
        }

       else if (name !== '' && birthday !== '' && staff_no !== '' && email !== '' && Hash_password !== '' && tel_no !== '' && gender !== '') {
            const form =new FormData();


            form.append('name', name);
            form.append('birthday', birthday);
            form.append('staff_no', staff_no);
            form.append('email', email);
            form.append('Hash_password', Hash_password);
            form.append('tel_no', tel_no);
            form.append('gender', gender);
            form.append('ProfilePicture', ProfilePicture);


            axios.post("http://localhost:8040/user/Signup",form).then(()=>{
                toast.success("Successfully Registred");
                navigate('/signin/');
            }).catch(()=>{
                toast.success("Something Went Wrong")
            })

            setName('')
            setBirthday('')
            setStaffNo('')
            setEmail('')
            setHashPassword('')
            setTelNo('')
            setGender('')
            setpicture(null)
            
        }

    }
    const handleCatImg = (e) => {
        setpicture(e.target.files[0]);

    }

   

    return (
        <div style={{backgroundImage:`url(${I1})`, alignItems: 'center', justifyContent: 'flex-start',backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        opacity: 1.0, // Set the opacity of the image (0.0 to 1.0)
        filter: "brightness(90%)" }} >
        <Container component="main" maxWidth="xs" className='container1'>
            <CssBaseline /><br/>

            <div>
            <Box 
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor:'white',
                    borderRadius:'20px'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={sendData} encType='multipart/form-data' noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6} >
                            <Box >
                                <TextField 
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    fullWidth
                                    required
                                    id="name"
                                    label="Name"
                                    name="name"
                                />


                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="birthday"
                                
                                name="birthday"
                                type='date'
                                value={birthday}
                                onChange={(e) => { setBirthday(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="staff_no"
                                label="Staff ID"
                                name="staff_no"
                                value={staff_no}
                                onChange={(e) => { setStaffNo(e.target.value) }}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type='email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="tel_no"
                                label="Telephone Number"
                                name="tel_no"
                                type='number'
                                value={tel_no}
                                onChange={(e) => { setTelNo(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="gender"
                                label="Gender"
                                name="gender"
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Password"
                                label="Password"
                                name="Hash_password"
                                value={Hash_password}
                                onChange={(e) => { setHashPassword(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type='file'
                                    onChange={(e) => { handleCatImg(e) }}

                                />

                            </Form.Group>
                        </Grid>
                    </Grid>
                    <center>
                    <Button
                        type="submit"
                        
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button></center>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link to="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                           <br/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </div>
            <br/>
        </Container>
        </div>


    )
}

export default Signup