/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { HandleQuestions } from '../utils';
import { TexttoSpeak } from './TexttoSpeak';
import Fab from '@mui/material/Fab';
import Listeninganimation from "../utils/listeninganimation";

import MicIcon from '@mui/icons-material/Mic';
const AI: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();
  const [AI_Res, SetAI_RES] = useState<string>('')
  const [AI_Link, SetAI_Link] = useState<string>('');
  useEffect(() => {
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const result = event.results[event.results.length - 1];
      const text = result[0].transcript;
      setTranscript((prevTranscript) => prevTranscript + ' ' + text);
    };
    recognition.onend = () => {
      if (isListening) {
        const trimedword = transcript.trim();
        HandleQuestions(trimedword)
        recognition.start();

      }
    };
    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const startListening = () => {
    recognition.start();
    setIsListening(true);
  };

  const stopListening = async () => {
    const trimedword = transcript.trim();
    const AIResponse = await HandleQuestions(trimedword);
    TexttoSpeak(AIResponse.data.message);

    SetAI_RES(AIResponse.data.message);
    SetAI_Link(AIResponse.data.link);
    setIsListening(false);
    setTranscript('');

  };
  if (AI_Link) {
    window.open(AI_Link, '_blank');
  }

  return (
    <div className='mt-10' >
      <h1 className='text-center text-4xl font-bold text-black mb-5'>Talk With AI</h1>
      <div className='mb-5 text-center'>
      <Fab
        color="primary" 
        sx={{ '& > :not(style)': { m: 1 } }}
        className={isListening ? 'listening' : ''}
        onClick={isListening ? stopListening : startListening}
      >
        {isListening ? <Listeninganimation/> : <MicIcon/>}
      </Fab>
      </div>
     
      <div style={{border:'1px solid silver',borderRadius:'10px'}} className="text-1xl bg-black w-[60%] h-[400px] m-auto p-4 overflow-scroll">
      <p className='font-semibold text-slate-200'><span className="text-[#ffd700]">Query :$\ </span> {transcript===""?"null":transcript}</p>
      <p className='text-blue-500'><span className="text-[#ffd700]">Response :$\ </span> {AI_Res}</p>
      </div>
     
      
     
    </div>
  );
};

export default AI;
