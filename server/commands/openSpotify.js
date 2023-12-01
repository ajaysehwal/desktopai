const { exec } = require('child_process');

class SpotifyOpener {
  constructor() {
    
    this.command =
      process.platform === 'win32'
        ? 'start spotify' // Windows
        : process.platform === 'darwin'
        ? 'open -a Spotify' // macOS
        : 'spotify'; // Linux (assuming Spotify is in the PATH)
  }

  openSpotify() {
    exec(this.command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening Spotify: ${error.message}`);
      } else {
        console.log('Spotify opened successfully.');
      }
    });
  }
}

module.exports = SpotifyOpener;
