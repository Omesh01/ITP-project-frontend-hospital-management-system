import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link , useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import toast from 'react-hot-toast'
import axios from 'axios';


const SignIn = () => {


    const [emal, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const email = emal;
    const Hash_password = passwd;
    const navigate = useNavigate();

    const adminLogin = (e) => {
     
        e.preventDefault();

        if (emal === '') {
          
            toast.error("Please Provide An Email..!", {
                id: "email"
            })
        }
        else if (passwd === '') {
          
            toast.error("Please Provide the Password..!", {
                id: "'password'"
            })
        }
        else if (emal === '' && passwd === '') {
           
            toast.error("PPlease provide the Credentials...!", {
                id: "credential"
            })
        }

        else if (emal !== '' & passwd !== '') {
            const admin = {
                email,
                Hash_password
            }


            const uid = axios.post("http://localhost:8040/user/Signin",admin).then((response)=>{
                toast.success("Successfull Login!");
                const uid = response.data.payload.uid; 
                console.log(uid);
                navigate('/inventory');
            }).catch(() => {
                toast.error("Something Went Wrong!")
            })
           
            setEmail('');
            setPasswd('');
        }
    }


    return (
        <>
            <Container component="main" maxWidth="xs" className='container2'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={adminLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Hash_password"
                            label="Password"
                            type="password"
                            id="Hash_password"
                            autoComplete="current-password"
                            autoFocus
                            value={passwd}
                            onChange={(e) => setPasswd(e.target.value)}

                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                          <center>
                        <Grid >
                            <Grid item xs={12} sm={6}>
                                <Link to='/signup' variant="body2">
                                    Sign Up?
                                </Link>
                            </Grid>
                        </Grid>
                        </center>
                    </Box>
                </Box>
            </Container>
            </>
    )
}

export default SignIn