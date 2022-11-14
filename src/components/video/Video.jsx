import React from 'react';
import { Player } from 'video-react';
import Navbarr from '../navbar/Navbarr';

const Video=()=>{
    return(
        <div>
            <Navbarr />
            <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
        </div>
    )
}
export default Video