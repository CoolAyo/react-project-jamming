import React, { useState, useCallback } from "react";

import "./Tracks.css";

const Track = (props) => { /*songName,artistName,album */
  <div className='Track'>
    <div className='TrackInfo'>
      <h3>&#40;{props.track.name}&#41; by &#40;{props.track.artists[0].name}&#41;</h3>
        <p>&#40;{props.track.name}&#41;, <span style={{color: "#EFE1C7"}}>&#40;{props.track.album}&#41;</span></p>
    </div>
  </div>
}


const Tracks = (props) => { //Props for playlist or search results 
  return (
    <div id="TrackList">
      {props.tracks.map((trackValid) => {
        return (
          <Track
            track={trackValid}
            /*key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}*/
          />
        );
      })}
    </div>
  );
};

export default Tracks;

{/*         <div className='TrackInfo'>
            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
            <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
            <p>When clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
        </div>    */}