const { exec } = require('child_process');
const fs = require('fs');

class CreateReactApp {
  constructor() {
    this.defaultAppName = 'my-react-app';
  }

  createReactApp(appName, packageManager) {
    const directoryName = '..';
    const fullPath = `${directoryName}/${appName}`;

    if (fs.existsSync(fullPath)) {
      console.log(`The directory ${fullPath} already exists. Please choose a different name.`);
      return;
    }

    console.log(`Creating a new React app in ${fullPath} using ${packageManager}...`);

    if (!fs.existsSync(directoryName)) {
      fs.mkdirSync(directoryName);
    }

    const createCommand = packageManager === 'yarn' ? 'yarn create react-app' : 'npx create-react-app';

    exec(`${createCommand} ${appName}`, { cwd: directoryName }, (error) => {
      if (error) {
        console.error(`Error creating React app with ${packageManager}:`, error.message);
      } else {
        console.log(`React app created successfully using ${packageManager}.`);
        this.installDependencies(fullPath, packageManager);
        this.openInVSCode(fullPath);
      }
    });
  }

  installDependencies(folderPath, packageManager) {
    console.log(`Installing dependencies with ${packageManager}...`);

    const installCommand = packageManager === 'yarn' ? 'yarn' : 'npm install';

    const childProcess = exec(installCommand, { cwd: folderPath });

    childProcess.stdout.on('data', (data) => {
      console.log(data);
    });

    childProcess.stderr.on('data', (data) => {
      console.error(data);
    });

    childProcess.on('close', (code) => {
      if (code === 0) {
        console.log(`Dependencies installed successfully using ${packageManager}.`);
      } else {
        console.error(`Error installing dependencies with ${packageManager}. Exit code: ${code}`);
      }
    });
  }

  openInVSCode(folderPath) {
    console.log('Opening in Visual Studio Code...');
    exec(`code ${folderPath}`);
  }

  runScript(packageName) {
    this.createReactApp(this.defaultAppName, packageName);
  }
}

module.exports = CreateReactApp;
