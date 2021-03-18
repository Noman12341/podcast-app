import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(() => ({
    mainContainer: {
        backgroundColor: '#000',
        padding: 120,
        color: '#fff',
        outline: 'none'
    }, mainHeading: {
        textTransform: 'uppercase',
        fontWeight: '600'
    }, subHeading: {
        color: '#C1272D',
        fontWeight: '600'
    }, twitterICons: {
        color: '#C1272D',
        fontSize: 60,
        cursor: 'pointer',
        marginTop: 10,
        marginBottom: 10,
        '&:hover': {
            transform: 'scale(1.2,1.2)',
            transition: 'transform .3s ease'
        }
    }, emailInput: {
        padding: 10,
        width: 200,
        fontSize: 14,
        fontWeight: 500,
        color: '#000'
    }, subscribeBtn: {
        padding: '12px 16px',
        backgroundColor: '#C1272D',
        borderRadius: 4,
        border: 'none',
        color: '#fff',
        marginLeft: 14,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.1,1.1)',
            transition: 'transform .3s ease'
        }
    }
}))
function Footer() {
    const classes = useStyles()
    return <Container maxWidth='false' className={classes.mainContainer}>
        <Grid container>
            <Grid lg={6}>
                <Typography variant="h4" className={classes.mainHeading}><Typography variant="h4" component="span" className={classes.subHeading}>About</Typography> The SHOw</Typography>
                <Typography component='p' className={classes.myPara}>You can listen to podcast on our website or by subscribing to the the serios to the podcast app and for more details visit somewhere</Typography>
            </Grid>
            <Grid lg={6}>
                <Box pl={5}>
                    <Typography variant="h4" className={classes.mainHeading}><Typography variant="h4" component="span" className={classes.subHeading}>Follow</Typography> Us</Typography>
                    <TwitterIcon className={classes.twitterICons} />
                    <Typography variant="h4" className={classes.mainHeading}><Typography variant="h4" component="span" className={classes.subHeading}>Mailing</Typography> list</Typography>
                    <Typography component='p' className={classes.myPara} style={{ marginBottom: 14 }}>Get notified when we release new episodes and goodies.</Typography>
                    <input className={classes.emailInput} type='email' name='email' placeholder="Email" /><button className={classes.subscribeBtn}>subscribe</button>
                </Box>
            </Grid>
        </Grid>
    </Container>
}
export default Footer;