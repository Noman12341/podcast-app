import React from 'react';
import Box from '@material-ui/core/Box';
import Header from '../frames/Header';
import ShowAudioCards from '../frames/ShowAudioCards';
import SocialLinksSection from '../frames/SocialLinks';
import Footer from '../frames/Footer';
function Home() {
    return <Box>
        <Header />
        <ShowAudioCards />
        <SocialLinksSection />
        <Footer />
    </Box>
}
export default Home;