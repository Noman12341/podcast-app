import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import logo from '../Images/Logo.png';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    mainBox: {
        backgroundColor: 'lightgrey',
        minHeight: 120,
        width: '100%',
        marginTop: 30
    }, logoImg: {
        height: 100,
        width: 100,
        marginLeft: 15,
        marginTop: 10
    }, episodeHeading: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: 700,
        textTransform: 'uppercase'
    }, episodePara: {
        fontWeight: 500,
        fontSize: 16
    }, playButton: {
        height: '100%',
        '& .rhap_rewind-button': {
            display: 'none'
        }, '& .rhap_repeat-button': {
            display: 'none'
        }, '& .rhap_forward-button': {
            display: 'none'
        }, '& .rhap_volume-button': {
            display: 'none'
        }, '& .rhap_volume-bar-area': {
            display: 'none'
        }, '& .rhap_progress-section': {
            display: 'none'
        }, '& .rhap_container': {
            backgroundColor: 'transparent',
            border: 0,
            boxShadow: 'none',
            height: '100%',
            padding: 0
        }, '& .rhap_play-pause-button': {
            height: '100%',
            fontSize: 70,
            width: 70
        }
    }
}))
function SmallAudioCard({ episode, mp3Src, date, description }) {
    const classes = useStyles();
    return <Box className={classes.mainBox}>
        <Grid container spacing={0}>
            <Grid item lg={2}>
                <Box>
                    <img src={logo} className={classes.logoImg} alt="" />
                </Box>
            </Grid>
            <Grid item lg={8}>
                <Typography component="h1" className={classes.episodeHeading}>Episode: 005: Title</Typography>
                <Typography component="p" className={classes.episodePara}>Description: hsd iasdhi hasidh asihd asih dasihd asihd asidh asihdias hdias sadasdas dsa das sad asd adasdas</Typography>
                <Typography component="p"><Typography variant="subtitle1" component="strong">Time:</Typography> 57:00</Typography>
            </Grid>
            <Grid item lg={2}>
                <Box className={classes.playButton}>
                    <AudioPlayer autoPlay={false} src="https://stream.redcircle.com/episodes/c401c997-8c90-4e11-a4b3-e763d6765255/stream.mp3" />
                </Box>
            </Grid>
        </Grid>
    </Box>
}
export default SmallAudioCard;