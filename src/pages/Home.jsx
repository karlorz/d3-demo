

import Header from '../components/Header';
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const Component = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 110px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        '& > div > p': {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > div > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48
        }
    }
})

const Home = () => {    
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Component>
                <Box>
                    <Box>
                        <Typography>check demo</Typography>
                        <Button 
                            variant="contained"
                            onClick={() => navigate(routePath.demo)}
                        >demo</Button>
                    </Box>
                </Box>       

            </Component>
        </>
    )
}

export default Home;