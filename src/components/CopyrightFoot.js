import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { LinkedIn } from '@mui/icons-material';
// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

export default function Copyright() {
    return (
        <>
            <Typography variant='body2' color='text.secondary' align='center'>
                {'Copyright © '}
                <MuiLink color='inherit' href='https://himabalde.netlify.app'>
                    Hima Portfolio
                </MuiLink>{' '}
                <MuiLink color='inherit' href='https://github.com/bahim22'>
                    GitHub Portfolio
                </MuiLink>{' '}
                {new Date().getFullYear()}.
                <LinkedIn component={'link'} htmlColor='blue' href='https://linkedin.com/in/himabalde'>
                    LinkedIn Profile
                </LinkedIn>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}

/** 
function CopyrightOld() {
    return (
        <ScopedCssBaseline>
            <Typography variant='body2' color='text.secondary' align='center'>
                {'Copyright © '}
                <MuiLink color='inherit' href='https://himabalde.netlify.app'>
                    Dionysus Era
                </MuiLink>{' '}
                <MuiLink color='inherit' href='https://github.com/bahim22'>
                    Hima Portfolio
                </MuiLink>{' '}
                {new Date().getFullYear()}.
            </Typography>
        </ScopedCssBaseline>
    );
}
*/
