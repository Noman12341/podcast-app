import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import myLogo from '../Images/Logo.png';

const useStyles = makeStyles(() => ({
    audioCardDiv: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        gap: 20,
        width: '70%',
        padding: 20,
        margin: '10% auto 0'
    }
}))
function AudioCard({ logo, mp3Src, episode, description, duration }) {
    const classes = useStyles();

    return <Container>
        <div className={classes.audioCardDiv}>
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <img src={myLogo} style={{ display: 'block', height: '100%', width: '100%' }} alt="" />
                </Grid>
                <Grid item lg={8}>
                    <Typography variant="h6" style={{ margin: '10px 0' }}>Episode 00{episode} : Grindhouse Courthouse #1 - The 13th Warrior</Typography>
                    <Typography variant="subtitle1" style={{ margin: '10px 0', maxHeight: 50, overflowY: 'hidden' }}><strong>Description: </strong>{description}</Typography>
                    <Typography variant="subtitle2" style={{ margin: '10px 0' }}><strong>Duration: </strong>{duration}</Typography>
                    <AudioPlayer
                        src={mp3Src}
                        onPlay={e => console.log("onPlay")}
                    // other props here
                    />
                </Grid>
            </Grid>
        </div>
    </Container>

}
export default AudioCard;