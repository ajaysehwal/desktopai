const { exec } = require('child_process');
const prompt = require('prompt');
const fs = require('fs');
prompt.start();

class CreateViteApp {
    constructor() {
        this.defaultAppName = 'my-vite-app';
        this.defaultVariant = 'react-ts-swc';

        this.promptSchema = {
            properties: {
                createApp: {
                    description: 'Enter "create app" to initialize a new Vite app with default settings',
                    required: true,
                },
            },
        };

        this.startViteApp = this.startViteApp.bind(this);
        this.installDependencies = this.installDependencies.bind(this);
        this.openInVSCode = this.openInVSCode.bind(this);
        this.runScript = this.runScript.bind(this);
    }

    startViteApp(appName, attempt = 1) {
        const directoryName = '..';
        const fullPath = `${directoryName}/${appName}`;
        if (fs.existsSync(fullPath)) {
            // If the app already exists, generate a new name
            const newAppName = `${appName}-${attempt}`;
            console.log(`The directory ${fullPath} already exists. Trying a new name: ${newAppName}`);
            this.startViteApp(newAppName, attempt + 1);
            return;
        }

        console.log(`Creating a new Vite app in ${fullPath}...`);

        if (!fs.existsSync(directoryName)) {
            fs.mkdirSync(directoryName);
        }

        const templateOption = '--template react-swc-ts';

        
        exec(`yarn create vite ${appName} ${templateOption}`, { cwd: directoryName }, (error) => {
            if (error) {
                console.error('Error creating Vite app:', error.message);
            } else {
              console.log('Vite app created successfully.');
                this.installDependencies(fullPath);
                this.openInVSCode(fullPath);

            }
        });
    }

    installDependencies(folderPath) {
         
        console.log('Installing dependencies with Yarn...');

        const childProcess = exec('yarn', { cwd: folderPath });

        childProcess.stdout.on('data', (data) => {
            console.log(data);
        });

        childProcess.stderr.on('data', (data) => {
            console.error(data);
        });

        childProcess.on('close', (code) => {
            if (code === 0) {
                console.log('Dependencies installed successfully.');
                this.openInVSCode(folderPath);
            } else {
                console.error(`Error installing dependencies. Exit code: ${code}`);
            }
        });
    }

    openInVSCode(folderPath) {
      console.log('Opening in Visual Studio Code...');
        exec(`code ${folderPath}`);

    }

    runScript() {
          this.startViteApp(this.defaultAppName);
       }
}


module.exports = CreateViteApp;