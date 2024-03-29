import React from "react";
import { createRoot } from "react-dom/client";
//import App from "./components/App/App";
//import "./index.css";

import ReactDOM from "react-dom/client";
//import "./index.css";

function MyComponentTest() {
    return (
    <div id='temp'>
      <h1>Jammming</h1>
      <input placeholder="Enter the name of the song or artist" />
      <div id='SearchResults'>
        <h2>Popular songs with &#40; searched up song name &#41; &#40; Show the text "Results" when nothing has yet been typed &#41; </h2>
        <p>&#40;Put search icon in search box&#41;</p>
        <form id='albumFilter'>
          <input type="checkbox" id="filterByAlbum" name="filterByAlbum" value="useAlbumFilter"/>
          <label for="filterByAlbum">Filter by Album?</label>
        </form> 
      </div>
      <div id='TrackContainer'>
        <div id='Track'>
          <div id='TrackInfo'>
            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
            <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
            <p>When clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
        <div id='Track'>
          <div id='TrackInfo'>
            <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>
            <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>
            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
        <div id='Track'>
          <div id='TrackInfo'>
            <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>
            <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>
            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>
          </div>      
        </div>
      </div>

      <div id='Playlist'>
        <input defaultValue={"New Playlist"} />
        <div id='Playlist Container'>
          {/*Only show tracks that have been selected */}

          <div id='Track'>
            <div id='TrackInfo'>
              <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>
              <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>
              <p>When clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
            </div>      
          </div>

          <div id='Track'>
            <div id='TrackInfo'>
              <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>
              <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>
              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
              </div>      
            </div>
          
          <div id='Track'>
            <div id='TrackInfo'>
              <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>
              <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>
              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>
              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>
            </div>      
          </div>
          
          </div>
          <button className="Playlist-save">
            SAVE TO SPOTIFY ACCOUNT
          </button>
          </div>

    </div>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyComponentTest />
);