class HelloHandler {
  static handle() {
    const helloResponses = ["Hello! How can I assist you today?", "Hey there!", "Greetings! What can I do for you?"];
    return helloResponses[Math.floor(Math.random() * helloResponses.length)];
  }
}
class OpenYouTubeHandler {
  static generateLink() {
    return "https://youtube.com/";
  }
}
class DefaultHandler {
  static handle() {
    const defaultResponses = [
      "I'm sorry, I didn't understand that.",
      "Could you please repeat?",
      "I'm here to help. What can I do for you?",
      "I didn't catch that. Can you say it again?",
      "I'm still learning. Could you rephrase your statement?",
      "I'm not sure I understand. Can you provide more details?",
      "Pardon my confusion. Could you clarify what you meant?",
      "I might need a bit more context. What are you referring to?",
      "I'm here to assist. What specifically would you like help with?",
      "Your input is valuable. Could you repeat that for me?",
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}
class HowAreYouHandler {
  static handle() {
    const howAreYouResponses = [
      "I'm just a computer program, but thanks for asking!",
      "I'm here and ready to help!",
      "No complaints. How about you?",
    ];
    return howAreYouResponses[Math.floor(Math.random() * howAreYouResponses.length)];
  }
}

class TellJokeHandler {
  static tellJoke() {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
}

class HistoricalFactHandler {
  static provideHistoricalFact() {
    const historicalFacts = [
      "The Great Wall of China is the longest wall in the world, stretching over 13,000 miles.",
      "Cleopatra was born closer in time to the moon landing than to the construction of the Great Pyramid of Giza.",
      "The first computer programmer was Ada Lovelace in the 19th century.",
    ];
    return historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
  }
}

class FunFactHandler {
  static provideFunFact() {
    const funFacts = [
      "A group of flamingos is called a 'flamboyance.'",
      "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.",
      "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    ];
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }
}
class WeatherHandler {
  static handle() {
    // Logic for getting weather information
    return "The current weather is sunny!";
  }
}

class TimeHandler {
  static handle() {
    // Logic for getting the current time
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}.`;
  }
}

class NewsHandler {
  static handle() {
    // Logic for fetching latest news
    return "Here are the latest news headlines...";
  }
}

class SportsHandler {
  static handle() {
    // Logic for providing sports updates
    return "In sports news...";
  }
}

class MovieRecommendationHandler {
  static handle() {
    // Logic for suggesting a movie recommendation
    return "I recommend watching the movie 'Inception'.";
  }
}

class BookRecommendationHandler {
  static handle() {
    // Logic for suggesting a book recommendation
    return "I recommend reading the book 'The Hitchhiker's Guide to the Galaxy'.";
  }
}

class CodingJokeHandler {
  static tellJoke() {
    const codingJokes = ["Why do programmers prefer dark mode? Because light attracts bugs!", "How many programmers does it take to change a lightbulb? None, that's a hardware issue!"];
    return codingJokes[Math.floor(Math.random() * codingJokes.length)];
  }
}

class TriviaHandler {
  static handle() {
    // Logic for providing interesting trivia
    return "Did you know...?";
  }
}

class FoodHandler {
  static handle() {
    // Logic for discussing food topics
    return "Let's talk about delicious food!";
  }
}
class TravelRecommendationHandler {
  static content = [
    "Sure, I recommend exploring Paris! The city of lights has so much to offer, from the Eiffel Tower to delicious pastries.",
    "How about a trip to Kyoto, Japan? The rich cultural heritage and beautiful temples make it a fantastic destination.",
    "Consider visiting Santorini, Greece, for its stunning views, crystal-clear waters, and charming architecture."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class TechNewsUpdateHandler {
  static content = [
    "Here are the latest tech news updates: Apple announces new iPhone, SpaceX launches a successful mission, and AI advancements in healthcare.",
    "Tech news alert! Google introduces breakthrough AI technology, and Amazon unveils innovative sustainability initiatives."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class MusicSuggestionHandler {
  static content = [
    "How about listening to some smooth jazz? Miles Davis' 'Kind of Blue' is a classic!",
    "Explore the world of indie rock with bands like Arctic Monkeys and Tame Impala.",
    "Discover the beauty of classical music with pieces like Beethoven's Symphony No. 9."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class HealthWellnessTipsHandler {
  static content = [
    "Here are some health and wellness tips: Stay hydrated, get enough sleep, and incorporate fresh fruits and vegetables into your diet.",
    "Practice mindfulness and meditation for mental well-being. Taking breaks and deep breaths can make a significant difference."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class PetDiscussionHandler {
  static content = [
    "Let's talk about pets! Whether you have a cat, dog, or hamster, pets bring joy and companionship into our lives. Share your pet stories!",
    "Pets are wonderful companions. What's your favorite memory with your furry friend?"
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class MotivationalQuoteHandler {
  static content = [
    "Stay positive and keep moving forward! 'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt",
    "Embrace challenges with a positive mindset. 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill"
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class ScienceFactsSharingHandler {
  static content = [
    "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "Explore the wonders of science! Fun fact: A single bolt of lightning contains enough energy to power a small town for a week."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

class MovieTriviaHandler {
  static content = [
    "Here's an interesting movie trivia: In 'The Shawshank Redemption,' the chess game played by Morgan Freeman and Tim Robbins is a real, unscripted game.",
    "Did you know? The iconic line 'Here's looking at you, kid' from 'Casablanca' was improvised by Humphrey Bogart."
  ];

  static handle() {
    return this.getRandomResponse(this.content);
  }
}

module.exports = {
  HelloHandler,
  OpenYouTubeHandler,
  DefaultHandler,
  HowAreYouHandler,
  TellJokeHandler,
  HistoricalFactHandler,
  FunFactHandler,
  WeatherHandler,
  TimeHandler,
  NewsHandler,
  SportsHandler,
  MovieRecommendationHandler,
  BookRecommendationHandler,
  CodingJokeHandler,
  TriviaHandler,
  FoodHandler, 
  TravelRecommendationHandler,
  TechNewsUpdateHandler,
  MusicSuggestionHandler,
  HealthWellnessTipsHandler,
  PetDiscussionHandler,
  MotivationalQuoteHandler,
  ScienceFactsSharingHandler,
  MovieTriviaHandler,
};