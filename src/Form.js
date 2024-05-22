import React, { useState } from 'react';
import axios from 'axios';
// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import dotenv from 'dotenv';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export function SizeAvatars() {
    return (
        <Stack direction='row' spacing={2}>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' sx={{ width: 24, height: 24 }} />
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            <Avatar alt='Remy Sharp' src='./assets/logo640.png' sx={{ width: 56, height: 56 }} />
        </Stack>
    );
}

function Image(image1, ...rest) {
    <>
        <img
            className='object-cover object-center rounded'
            alt='avator of developer'
            title='Hima avatar'
            loading='eager'
            src={rest}
            width='auto'
            height='auto'
        />
        {rest}
        <img title='my puppy' width='50%' height='50' src={image1} alt='logo' />
    </>;
}

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
        // url: `${formspree}` || `{process.env.REACT_APP_FORM_URI}`
        // const formspree = process.env.REACT_APP_FORM_ID
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xrgjabgr', // || '{process.env.REACT_APP_FORM_URI}',
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
                    Contact me today!
                </Typography>
                <form onSubmit={handleOnSubmit} method='POST'>
                    <FormLabel htmlFor='email'></FormLabel>
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
                        value={inputs.email}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <FormLabel htmlFor='message'></FormLabel>
                    <TextField
                        id='message'
                        fullWidth
                        name='message'
                        placeholder='Enter your message.'
                        aria-colspan={80}
                        rows={8}
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                    <Divider variant='middle' textAlign='center' sx={{ color: 'primary' }} />
                    <Button variant='contained' type='submit' fullWidth disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </Button>
                </form>
            </Box>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </>
    );
}

// export function ContactForm() {
//     const [state, handleSubmit] = useForm('process.env.REACT_APP_FORM_URI');
//     if (state.succeeded) {
//         return <p>Thanks for joining!</p>;
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='email'>Email Address</label>
//             <input id='email' type='email' name='email' />
//             <ValidationError prefix='Email' field='email' errors={state.errors} />
//             <textarea id='message' name='message' />
//             <ValidationError prefix='Message' field='message' errors={state.errors} />
//             <button type='submit' disabled={state.submitting}>
//                 Submit
//             </button>
//         </form>
//     );
// }
