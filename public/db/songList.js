const html = require("html-template-tag");

module.exports = (songs) => html`<!DOCTYPE html>
  <head>
    <title>Running Playlist</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
    <h1>Top Songs for a Running Playlist</h1>
    <div id="parent">
      <div class="row header">
        <div class="artist">Artist</div>
        <div class="title">Title</div>
        <div class="released">Released</div>
        <div class="rank">Billboard Rank</div>
      </div>
      
      ${songs.map (song => html`
        <div class="row">
          <div class="artist">${song.band}</div>
          <div class="title"><a href="/main/${song.songid}">${song.song}</a></div>
          <div class="released">${song.released}</div>
          <div class="rank">${song.rank}</div>
        </div>`
      )}

    </div>
  </body>
</html>`;


