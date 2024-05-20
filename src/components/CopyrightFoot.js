import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';


function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://m.facebook.com/people/Infinite-Success-Virtual-LLC/61557695124632'>
                Infinite Success Virtual
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Copyright() {
    return (
        <ScopedCssBaseline>
            <Typography variant='body2' color='text.secondary' align='center'>
                {'Copyright © '}
                <MuiLink color='inherit' href='https://himabalde.netlify.com'>
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
