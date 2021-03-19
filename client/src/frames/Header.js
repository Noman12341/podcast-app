import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from '../Images/Logo.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    mainConainer: {
        backgroundColor: '#000',
        minHeight: '50vh',
        padding: 0
    }, smallLogo: {
        height: 60,
        width: 60
    }, mainHeading: {
        fontSize: 70,
        fontWeight: 800,
        color: '#fff',
        lineHeight: .8,
        marginTop: 90
    }, mainPara: {
        fontWeight: 600,
        color: '#fff',
        marginTop: 20,
        marginLeft: 10
    }, bigLogoBox: {
        textAlign: 'center',
        '& > img': {
            maxWidth: 400,
            maxHeight: 400
        }
    }, waveBox: {
        height: 20,
        backgroundColor: '#C1272D'
    }
}))
function Header() {
    const classes = useStyles();

    return <Container maxWidth="false" className={classes.mainConainer}>
        <Box p={10}>
            <Box mb={20}>
                <img src={logo} className={classes.smallLogo} alt="" />
            </Box>
            <Grid container>
                <Grid item lg={6}>
                    <Typography variant="h1" component="h1" className={classes.mainHeading}>Grindhouse<br />Courthouse</Typography>
                    <Typography component="p" className={classes.mainPara}>Another movie discussion podcast...</Typography>
                </Grid>
                <Grid item lg={6}>
                    <Box className={classes.bigLogoBox}>
                        <img src={logo} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box className={classes.waveBox}></Box>
    </Container>
}
export default Header;