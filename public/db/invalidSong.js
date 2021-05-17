const html = require("html-template-tag");

module.exports = (host) => html`<!DOCTYPE html>
  <head>
    <title>Running Playlist</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
    <h1>Top Songs for a Running Playlist <a href="http://${host}"><small>(back to main)</small></a>
    </h1>
    <div>
    <p>&nbsp</p>
    <h2>Error encountered - please go back and select a different song</h2>
    </div>
  </body>
</html>`;