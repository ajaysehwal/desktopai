const fs = require('fs'); // Note the use of 'fs/promises'
const path = require('path');
const os = require('os');
const prompt = require('prompt');

class RecycleBinManager {
  constructor() {
    this.recycleBinPath = this.getRecycleBinPath();
  }

  getRecycleBinPath() {
    const systemDrive = process.env.SYSTEMDRIVE || 'C:';
    const userName = os.userInfo().username;
    const recycleBinPath = path.join(systemDrive, '$Recycle.Bin', userName);
  
    // Check if the directory exists
    if (fs.existsSync(recycleBinPath) && fs.statSync(recycleBinPath).isDirectory()) {
      return recycleBinPath;
    } else {
      throw new Error(`Recycle bin path not found: ${recycleBinPath}`);
    }
  }

  async emptyRecycleBin() {
    try {
      await fs.rm(this.recycleBinPath, { recursive: true });
      return 'Recycle bin emptied successfully.';
    } catch (error) {
      return `Error emptying recycle bin: ${error.message}`;
    }
  }

  promptUser() {
    return new Promise((resolve, reject) => {
      prompt.start();
      prompt.get({
        properties: {
          confirmation: {
            description: 'Delete unused data? (yes/no)',
            pattern: /^(yes|no)$/i,
            message: 'Please enter yes or no',
            required: true
          }
        }
      }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.confirmation.toLowerCase() === 'yes');
        }
      });
    });
  }

  async deleteUnusedData() {
    const userConfirmation = await this.promptUser();

    if (userConfirmation) {
      return this.emptyRecycleBin();
    } else {
      return 'Operation aborted by the user.';
    }
  }
}

// Example usage
const recycleBinManager = new RecycleBinManager();

recycleBinManager.deleteUnusedData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
