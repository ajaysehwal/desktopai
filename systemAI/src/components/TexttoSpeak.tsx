/* eslint-disable @typescript-eslint/no-explicit-any */
export const TexttoSpeak = (text:string) => {
      if (text && window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            
            utterance.lang = 'en-US';
            utterance.pitch = 2;
            utterance.rate = 1;
            utterance.volume = 1;
            const voices = window.speechSynthesis.getVoices();
            const naturalVoice = voices.find((voice) => voice.name.includes('hi-IN-Neural2-A'));

            if (naturalVoice) {
                utterance.voice = naturalVoice;
            }

            window.speechSynthesis.speak(utterance);
            // utterance.addEventListener('end', () => {
            //     setTranscript(''); 
            //   });
        }
      
  }
