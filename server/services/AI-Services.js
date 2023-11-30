const CreateViteApp = require("../commands/createviteapp");
const CreateReactApp = require("../commands/createreactapp");
const ChromeOpener = require('../commands/openchrome');
const { HelloHandler, OpenYouTubeHandler, DefaultHandler, HowAreYouHandler, TellJokeHandler, HistoricalFactHandler, FunFactHandler } = require("../Handlers");
module.exports = async (message, res) => {
  let response, links;
  switch (message.toLowerCase()) {
    case "hello":
    case "hey":
    case "hi":
    case "hello AI":
      response = HelloHandler.handle();
      break;
    case "open youtube":
      links = OpenYouTubeHandler.generateLink();
      response = "Sure, youtube is opening please wait..";
      break;
    case "how are you":
    case "how r u":
      response = HowAreYouHandler.handle();
      break;
    case "thank":
    case "thank you":
    case "thanks for solving my question":
    case "thanks for solving my doubts":
      response =
        "You're welcome! If you have any more questions, feel free to ask.";
      break;
    case "tell me a joke":
    case "tell me some jokes":
    case "tell me joke":
      response = TellJokeHandler.tellJoke();
      break;
    case "tell me about yourself":
      response =
        "I'm a virtual assistant here to help answer your questions and assist you with various tasks.";
      break;
    case "who is your creator":
      response = "I was created by a Ajay Sehwal who is software developer";
      break;
    case "favorite color":
    case "what is your favourite colour":
      response = "I don't have a favorite color, but I appreciate all colors!";
      break;
    case "what's the meaning of life":
      response =
        "The meaning of life is a profound philosophical question. Different people and cultures have different perspectives on it.";
      break;
    case "how do you work":
      response =
        "I operate based on predefined algorithms and patterns to understand and respond to user input.";
      break;
    case "your favorite book":
      response =
        "As a virtual assistant, I don't have personal preferences, but I can recommend some popular books if you're interested!";
      break;
    case "where do you live":
      response =
        "I exist in the digital realm, and I don't have a physical location.";
      break;
    case "can you dance":
      response =
        "I don't have a physical form, so I can't dance, but I can help you find some great dance tutorials!";
      break;
    case "favorite movie":
      response =
        "I don't watch movies, but I can provide recommendations based on your preferences!";
      break;
    case "tell me a fun fact":
      response = FunFactHandler.provideFunFact();
      break;
    case "favorite programming language":
      response =
        "I don't have preferences, but I'm proficient in processing code written in various programming languages.";
      break;
    case "tell me a riddle":
      const riddles = [
        "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? (Answer: An echo)",
        "The more you take, the more you leave behind. What am I? (Answer: Footsteps)",
        "What has keys but can't open locks? (Answer: Piano)",
      ];
      response = riddles[Math.floor(Math.random() * riddles.length)];
      break;
    case "favorite sport":
      response =
        "I don't have preferences, but I can provide information about various sports if you're interested!";
      break;
    case "can you sing":
      response =
        "I don't have a voice, but I can help you find some great songs and lyrics!";
      break;
    case "tell me a historical fact":
      response = HistoricalFactHandler.provideHistoricalFact();
      break;
    case "favorite food":
      response =
        "I don't eat, but I can help you find recipes or information about different cuisines!";
      break;
    case "tell me a quote":
      const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "The future belongs to those who believe",
      ];
      response = quotes[Math.floor(Math.random() * quotes.length)];
      break;
    case "who is your creator":
      response = "I was created by a team of developers at OpenAI.";
      break;
    case "you are looking good today":
      response = "Thank you for your appreciation but I am just your A I";
      break;
    case "create my react app":
    case "create vite app":
    case "please create my react app":
    case "create react plus typescript app":
      const ViteManager = new CreateViteApp();
      ViteManager.runScript();
      response = "Please Wait few seconds your vite app is creating...";
      break;
    case "create react app using npx":
    case "create react app":
      const ReactManagerNPX = new CreateReactApp();
      ReactManagerNPX.runScript("npx");
      response =
        "Please Wait few seconds your react app is creating by using npx ...";
      break;
    case "create react app using yarn":
    case "create yarn react app":
      const ReactManagerYARN = new CreateReactApp();
      ReactManagerYARN.runScript("yarn");
      response =
        "Please Wait few seconds your app is creating by using yarn ...";
      break;
    case "can you create react app for me":
      response = "yes sir if you want please say to me";
      break;
    case "open chrome":
    case "please open chrome":
      const chromeOpener = new ChromeOpener();
      chromeOpener.openChrome();
      response = "chrome is opening ..."
      break;
    default:
      response = DefaultHandler.handle();
      break;
  }

  res.status(200).json({ message: response, link: links });
};
