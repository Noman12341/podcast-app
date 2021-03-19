import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';
import CastIcon from '@material-ui/icons/Cast';
const useStyles = makeStyles(() => ({
    myContainer: {
        paddingTop: 100,
        paddingBottom: 100,
        textAlign: 'center',

    }, mainHeading: {
        textTransform: 'uppercase'
    }, subHeading: {
        color: '#C1272D'
    }, myPara: {
        fontWeight: 600,
        marginTop: 40,
        lineHeight: 2
    }, socialIconsBox: {
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginTop: 40,
        '& svg': {
            color: '#C1272D',
            fontSize: 50,
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.2,1.2)',
                transition: 'transform .3s ease'
            }
        }
    }
}))
function SocialLinks() {
    const classes = useStyles();
    return <Container maxWidth='false' className={classes.myContainer}>
        <Typography variant="h4" className={classes.mainHeading}><Typography variant="h4" component="span" className={classes.subHeading}>Listen on your</Typography> PREFERD player</Typography>
        <Typography component='p' className={classes.myPara}>You can listen to podcast on our website or by subscribing to the the serios <br /> to the podcast app and for more details visit somewhere</Typography>
        <Box className={classes.socialIconsBox}>
            <TwitterIcon />
            <AppleIcon />
            <CastIcon />
        </Box>
    </Container>
}
export default SocialLinks;