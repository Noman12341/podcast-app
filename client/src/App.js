import React, { useState, useEffect } from 'react';
import AudioCard from './Components/AudioCard';
import axios from 'axios';
import SocialLinksContaienr from './Components/SocialLinks';
import Footer from './Components/Footer';
function App() {

  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getFeedsArr = async () => {

      await axios.get('http://localhost:4000/get-live-rss-feed')
        .then(res => {
          setFeeds(res.data.items);
          console.log(res.data);
          setIsLoading(false);
        }).catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    }
    getFeedsArr();
  }, [])
  // return <div>
  //   {isLoading ? null : feeds.map(feed => (
  //     <AudioCard logo={feed.title} mp3Src={feed.enclosure.url} episode={feed.itunes.episode} description={feed.content} duration={feed.itunes.duration} />
  //   ))}
  // </div>

  return <div>
    <div>
      {isLoading ? null : feeds.map(feed => (
        <AudioCard logo={feed.title} mp3Src={feed.enclosure.url} episode={feed.itunes.episode} description={feed.content} duration={feed.itunes.duration} />
      ))}
    </div>
    <SocialLinksContaienr />
    <Footer />
  </div>
}

export default App;
