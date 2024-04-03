import React, { useState, useCallback } from "react";

import "./Tracks.css";


const Tracks = () => {

    return(
    <div className='Track'>
        <div className='TrackInfo'>
            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
            <p>&#40;SongResult1.name&#41;, <span style={{color: "#EFE1C7"}}>&#40;SongResult1.album&#41;</span></p>
        </div>      
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