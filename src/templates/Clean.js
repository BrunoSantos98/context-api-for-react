import {Container} from '@mui/material'

const Clean = ({Component}) => {
    return(
            <Container sx={{
                padding:'10px 0px',
                }}>
                <Component />
            </Container>
    )
}

export default Clean