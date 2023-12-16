
import { AppBar, Toolbar, styled } from "@mui/material";
import { routePath } from "../routes/route";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: '#2557A7',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})

const Header = () => {
    const logo = "https://echarts.apache.org/en/images/logo.png";

    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.home}>
                    <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
                </Link>
                <Link to={routePath.demo}>Demo</Link>
                <Link to={routePath.play}>Play</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;