import axios from "axios";
import { SetStateAction } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const serverhost=(path:string)=>{
    return `http://localhost:8000/${path}`;
}
export const HandleQuestions=async(question:string)=>{
const res=await axios.post(serverhost('query'),{question:question});
return res;
}
export const Listeninganimation=()=>{
    return (
      <div className="listeningicon">
        <span />
        <span />
        <span />
      </div>
    );
  }
  

export const HandleOneConversation=async(data:object,setTranscript: { (value: SetStateAction<string>): void; (arg0: string): void; })=>{
    try{
        const res= await axios.post(serverhost('normal_conversation'),data);
        setTranscript('');
        return res;
        
    }catch(err){
        return err;
    }
   
}