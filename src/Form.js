import React, { useState } from 'react';
import axios from 'axios';
// import './styles/Form.css';
// import './styles/Info.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// require('dotenv').config();

export default function FormPro() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
                submitting: false,
                submitted: false,
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        // @ts-ignore
        // const formspree = process.env.REACT_APP_FORM_ID;
        // const formspree = process.env.FORM_URI;
        // url: `${formspree}` || 'https://formspree.io/f/xrgjabgr',
        // const fkey = process.env.FORM_KEY;
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xrgjabgr',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(true, 'Message Submitted Successfully. Thank you!');
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    /*  const SubButton = () => {
        <button type='submit' disabled={status.submitting}>
            {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
        </button>;
    }; */
    return (
        <>
            <Box id='email' sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} align={'center'}>
                <Typography variant='h4' align='center' component='h2' sx={{ mb: 2 }}>
                    Contact Today to Sign Up!
                </Typography>
                <form onSubmit={handleOnSubmit} method='POST'>
                    <FormLabel htmlFor='email'></FormLabel>
                    {/* <label htmlFor='email'>Email</label> */}
                    <TextField
                        id='email'
                        fullWidth
                        type='email'
                        placeholder='Enter your email.'
                        name='_replyto'
                        aria-colspan={80}
                        rows={8}
                        onChange={handleOnChange}
                        required
                        // variant='Filled'
                        value={inputs.email}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <FormLabel htmlFor='message'></FormLabel>
                    {/* <label htmlFor='message'>Message</label> */}
                    <TextField
                        id='message'
                        fullWidth
                        name='message'
                        placeholder='Enter your message.'
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <Button variant='contained' type='submit' fullWidth disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </Button>
                    {/* <button type='submit' disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </button> */}
                </form>
                {/* <div>
                    <img
                        className='object-cover object-center rounded'
                        alt='ISV'
                        title='ISV'
                        loading='eager'
                        src='./assets/logo640.png'
                        // src='/logo640.png'
                        width='auto'
                        height='auto'
                    />
                    <img title='my puppy' width='50%' height='50' src='/pup.jpeg' alt='logo' />
                </div>*/}
            </Box>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    );
}

// export default FormPro;
