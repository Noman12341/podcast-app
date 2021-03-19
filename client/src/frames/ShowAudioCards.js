import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MainAudioCard from '../Components/MainAudioCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SmallAudioCard from '../Components/SmallAudioCards';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
    mainContainer: {
        padding: 100
    }, subLinkBox: {
        display: 'flex',
        gap: 15,
        padding: 10,
        borderBottom: '1px solid #000',
        marginBottom: 10
    }, redBox: {
        display: 'block',
        height: 20,
        width: 20,
        backgroundColor: '#C1272D',
        transform: 'translateY(2px)'
    }, blockLink: {
        display: 'block',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 500,
        color: '#000',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#C1272D',
            textDecoration: 'none'
        }

    }
}))
function ShowAudioCards() {
    const classes = useStyles();

    const [feeds, setFeeds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState('');
    const links = [{ name: 'spotyfy', href: "https://open.spotify.com/show/4MjXCuDwaxLWAlKjVSS77c" }, { name: 'Apple Podcast', href: "https://podcasts.apple.com/ca/podcast/grindhouse-courthouse-podcast/id1556504779" },
    { name: 'google podacast', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL2dyaW5kaG91c2Vjb3VydGhvdXNlcG9kY2FzdC9mZWVkLnhtbA' }, { name: 'Stitchers', href: 'https://www.breaker.audio/grindhouse-courthouse' }, { name: 'RSS', href: 'https://radiopublic.com/grindhouse-courthouse-podcast-6NB17o' }]
    useEffect(() => {
        const getFeedsArr = async () => {

            await axios.get('http://localhost:4000/feeds/get-live-rss-feed')
                .then(res => {
                    setFeeds(res.data.items);
                    console.log(res.data);
                    setIsLoading(false);
                }).catch(error => {
                    console.log(error);
                    setAlert(error);
                });
        }
        getFeedsArr();
    }, [])
    return <Container className={classes.mainContainer}>
        {isLoading ? <CircularProgress /> : <MainAudioCard episode={feeds[0].itunes.episode} mp3Src={feeds[0].enclosure.url} date={feeds[0].pubDate} />}
        {alert && <Alert severity="error">sadsadsa</Alert>}
        <Box mt={9}>
            <Grid container spacing={2}>
                <Grid item lg={9}>
                    <Typography variant="h4" component='h1'>Lates Episodes</Typography>
                    {/* <Box p={2}>
                        {isLoading ? <CircularProgress /> : feeds.map((feed, i) => (
                            <SmallAudioCard key={i} episode={feed.itunes.episode} mp3Src={feed.enclosure.url} date={feed.pubDate} description={feed.content} />
                        ))}
                    </Box> */}
                </Grid>
                <Grid lg={3}>
                    <Typography variant="h5" component='h1'>Listen & Subscribe</Typography>
                    <Box mt={2}>
                        {links.map((l, i) => (
                            <Box key={i} className={classes.subLinkBox}>
                                <Box className={classes.redBox}></Box>
                                <Link href={l.href} className={classes.blockLink} target="_blank">{l.name}</Link>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Container>
}
export default ShowAudioCards;