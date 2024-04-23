import React, { useState, useCallback } from "react";

import "./Tracks.css";

const Track = (props) => { /*songName,artistName,album */
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const playlistAction = () => {
    if (props.isPlaylist) {
      return (
        <h3 onClick={removeTrack}>&#40;{props.track.name}&#41; by &#40;{props.track.artist}&#41;</h3>
      );
    }
    return (
    <h3 onClick={addTrack}>&#40;{props.track.name}&#41; by &#40;{props.track.artist}&#41;</h3>
    );
  };
  

  return(
  <div className='Track'>
    <div className='TrackInfo'>
      {playlistAction()}
      <p>&#40;{props.track.name}&#41;, <span style={{color: "#EFE1C7"}}>&#40;{props.track.album}&#41;</span></p>
    </div>
  </div>);
}


const Tracks = (props) => { //Props for playlist or search results 
  let TrackArr = []
  for (const trakValid in props.tracks){
    TrackArr.push(<Track track={props.tracks[trakValid]} isPlaylist={props.isPlaylist} onAdd={props.onAdd} onRemove={props.onRemove}  /*key={track.id}*/ />)
  }
  return TrackArr;
};

export default Tracks;

{/*





<div className='TrackInfo'>
            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
            <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
            <p>When clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
        </div>    */}