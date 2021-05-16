const html = require("html-template-tag");

module.exports = (song) => html`<!DOCTYPE html>
  <head>
    <title>Running Playlist</title>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
    <h1>Top Songs for a Running Playlist</h1>
    <div id="parent">
      <div class="row header">
        <div class="artist">About the Artist<br>(${song.band})</div>
        <div class="title">About the Song<br>(${song.song})</div>
      </div>
      <div class="row">
        <div class="artist">${song.banddetails}</div>
        <div class="title">${song.songdetails}
        
        <iframe width="400" height="250" src="https://www.youtube.com/embed/KC0DNLDXJW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
      </div>
    </div>
  </body>
</html>`;