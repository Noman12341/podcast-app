import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import logo from '../Images/Logo.png';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    mainBox: {
        boxShadow: '5px 10px 18px #888888',
        padding: 15
    }, logo: {
        height: '100%',
        width: '100%'
    }
}))
function MainAudioCard({ episode, mp3Src, date }) {
    const classes = useStyles();
    return <Grid container spacing={4} className={classes.mainBox}>
        <Grid item lg={2} xs={12} sm={4} md={4} className={classes.imgBox}>
            <img src={logo} className={classes.logo} alt="" />
        </Grid>
        <Grid item lg={10} xs={12} sm={8} md={8}>
            <Typography variant="h6" component='h1'>Newest Episode: 00{episode}</Typography>
            <AudioPlayer
                src={mp3Src}
            // other props here
            />
            <Typography variant="subtitle1" component='h1'>Date:{date}</Typography>
        </Grid>
    </Grid>
}
export default MainAudioCard;