import React, { useState } from 'react';
import axios from 'axios';
// import './styles/Form.css';
import './styles/Info.css';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Button from '@mui/material/Button';
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
        <ScopedCssBaseline>
            <header id='contact'>
                <div className='sm:min-w-full lg:min-w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-around shadow-md shadow-teal-400'>
                    {/* <img width='100%' height='100' src='https://i.imgur.com/qkdpN.png' alt='logo' />
                    <img title='my puppy' width='50%' height='50' src='/pup.jpeg' alt='logo' />
                    */}
                    {/* <img
                        src='https://lists.office.com/Images/99e4f947-156c-4d29-a851-b2dc4d0f579e/467d1d78-fabd-40b9-992c-61e4a32208b2/T5FH5JPCKJU66BWFKVA8LK3FFQ/6fa7a51b-2dd0-4786-9687-4eef36143313'
                        alt='365 Form'
                        title='365 Form'
                        loading='lazy'
                        width='100%'
                        height='100'
                    /> */}
                    {/* <img src='/pup.jpeg' alt='logo card' /> */}
                </div>
            </header>
            <br />
            <div className='sm:min-w-full lg:min-w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex-wrap items-center justify-around shadow-md shadow-teal-400'>

                <h1 className='title-font sm:text-2xl text-3xl mb-4 font-medium text-blue-400 items-center text-center'>
                    Contact Me Today
                </h1>
                <form
                    onSubmit={handleOnSubmit}
                    method='POST'
                    className='sm:min-w-full lg:w-full bg-gray-400 rounded-lg overflow-hidden sm:mr-10 p-10 flex-wrap items-center justify-around shadow-md shadow-teal-400'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='_replyto'
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                    />
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' onChange={handleOnChange} required value={inputs.message} />
                    <br />
                    <Button variant='contained' type='submit' disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </Button>
                    {/* <button type='submit' disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
                    </button> */}
                </form>
                <div className='lg:min-w-fit lg:w-fit md:w-1/2 flex'>
                    <img
                        className='object-cover object-center rounded'
                        alt='hima b'
                        title='hima b'
                        loading='eager'
                        src='/hima2.jpeg'
                        width='50%'
                        height='300'
                    />
                <img title='my puppy' width='50%' height='50' src='/pup.jpeg' alt='logo' />
                </div>
            </div>
            {status.info.error && <div className='error'>Error: {status.info.msg}</div>}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </ScopedCssBaseline>
    );
}

// export default FormPro;
