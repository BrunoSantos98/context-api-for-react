import Typography from '@mui/material/Typography';
import {Container} from '@mui/material'

import Header from '../partials/Header/Header.js'
import useAuth from '../state/auth.js';

const Page = ({title,Component}) => {

    const {user} = useAuth()

    return(
        <>
            <Header user={user} />
            <Container sx={{
                padding:'10px 0px',
            }}>
                <Typography variant="h2">
                    {title}
                </Typography>
            </Container>
            <Component />
        </>
    )
}

export default Page