[33mcommit 402e3860a281fc2d8851fbd80ff9cde0a78ab8a3[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: Ayo . <alabi5840@gmail.com>
Date:   Fri Mar 29 08:06:45 2024 +0000

    Rough working of the HTML page

[1mdiff --git a/src/index.js b/src/index.js[m
[1mindex 6bb228e..152c191 100644[m
[1m--- a/src/index.js[m
[1m+++ b/src/index.js[m
[36m@@ -7,7 +7,85 @@[m [mimport ReactDOM from "react-dom/client";[m
 //import "./index.css";[m
 [m
 function MyComponentTest() {[m
[31m-    return <h1>Testing root render</h1>;[m
[32m+[m[32m    return ([m
[32m+[m[32m    <div id='temp'>[m
[32m+[m[32m      <h1>Jammming</h1>[m
[32m+[m[32m      <input placeholder="Enter the name of the song or artist" />[m
[32m+[m[32m      <div id='SearchResults'>[m
[32m+[m[32m        <h2>Popular songs with &#40; searched up song name &#41; &#40; Show the text "Results" when nothing has yet been typed &#41; </h2>[m
[32m+[m[32m        <p>&#40;Put search icon in search box&#41;</p>[m
[32m+[m[32m        <form id='albumFilter'>[m
[32m+[m[32m          <input type="checkbox" id="filterByAlbum" name="filterByAlbum" value="useAlbumFilter"/>[m
[32m+[m[32m          <label for="filterByAlbum">Filter by Album?</label>[m
[32m+[m[32m        </form>[m[41m [m
[32m+[m[32m      </div>[m
[32m+[m[32m      <div id='TrackContainer'>[m
[32m+[m[32m        <div id='Track'>[m
[32m+[m[32m          <div id='TrackInfo'>[m
[32m+[m[32m            <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>[m
[32m+[m[32m            <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>[m
[32m+[m[32m            <p>When clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m          </div>[m[41m      [m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div id='Track'>[m
[32m+[m[32m          <div id='TrackInfo'>[m
[32m+[m[32m            <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>[m
[32m+[m[32m            <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>[m
[32m+[m[32m            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m          </div>[m[41m      [m
[32m+[m[32m        </div>[m
[32m+[m[32m        <div id='Track'>[m
[32m+[m[32m          <div id='TrackInfo'>[m
[32m+[m[32m            <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>[m
[32m+[m[32m            <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>[m
[32m+[m[32m            <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m            <span>&#40;Resposive add button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m          </div>[m[41m      [m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m
[32m+[m[32m      <div id='Playlist'>[m
[32m+[m[32m        <input defaultValue={"New Playlist"} />[m
[32m+[m[32m        <div id='Playlist Container'>[m
[32m+[m[32m          {/*Only show tracks that have been selected */}[m
[32m+[m
[32m+[m[32m          <div id='Track'>[m
[32m+[m[32m            <div id='TrackInfo'>[m
[32m+[m[32m              <h3>&#40;SongResult1.name&#41; by &#40;SongResult1.artist&#41;</h3>[m
[32m+[m[32m              <p>&#40;SongResult1.name&#41;, <span style={{color: "green"}}>&#40;SongResult1.album&#41;</span></p>[m
[32m+[m[32m              <p>When clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m            </div>[m[41m      [m
[32m+[m[32m          </div>[m
[32m+[m
[32m+[m[32m          <div id='Track'>[m
[32m+[m[32m            <div id='TrackInfo'>[m
[32m+[m[32m              <h3>&#40;SongResult2.name&#41; by &#40;SongResult2.artist&#41;</h3>[m
[32m+[m[32m              <p>&#40;SongResult2.name&#41;, <span style={{color: "green"}}>&#40;SongResult2.album&#41;</span></p>[m
[32m+[m[32m              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m              </div>[m[41m      [m
[32m+[m[32m            </div>[m
[32m+[m[41m          [m
[32m+[m[32m          <div id='Track'>[m
[32m+[m[32m            <div id='TrackInfo'>[m
[32m+[m[32m              <h3>&#40;SongResult3.name&#41; by &#40;SongResult3.artist&#41;</h3>[m
[32m+[m[32m              <p>&#40;SongResult3.name&#41;, <span style={{color: "green"}}>&#40;SongResult3.album&#41;</span></p>[m
[32m+[m[32m              <p>Add extra feature, when clicking on Album change results to show every song from the Album</p>[m
[32m+[m[32m              <span>&#40;Resposive minus button that changes cursor and color/transparency when hovered/clicked&#41;</span>[m
[32m+[m[32m            </div>[m[41m      [m
[32m+[m[32m          </div>[m
[32m+[m[41m          [m
[32m+[m[32m          </div>[m
[32m+[m[32m          <button className="Playlist-save">[m
[32m+[m[32m            SAVE TO SPOTIFY ACCOUNT[m
[32m+[m[32m          </button>[m
[32m+[m[32m          </div>[m
[32m+[m
[32m+[m[32m    </div>[m
[32m+[m[32m    );[m
   }[m
 [m
 const root = ReactDOM.createRoot(document.getElementById("root"));[m
