import React, { useRef } from 'react'
import './VedioPlayer.css'
import Vedio from '../../assets/college-vedio.mp4'

const VedioPlayer = ({playState,setPlayState}) => {

   const player=useRef(null);
   const closePlayer=(e)=>{ 
    if(e.target === player.current){
        setPlayState(false);
    }
   } 
  return (
    <div className={`vedio-player ${playState? '':'hide'}`} ref={player} onClick={closePlayer}>
       <video src={Vedio} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer
