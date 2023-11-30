const { exec } = require('child_process');

class ChromeOpener {
  constructor() {
    this.command = process.platform === 'win32' ? 'start chrome' : 'google-chrome';
  }

  openChrome() {
    exec(this.command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening Chrome: ${error.message}`);
      } else {
        console.log('Chrome opened successfully.');
      }
    });
  }
}
module.exports=ChromeOpener;
