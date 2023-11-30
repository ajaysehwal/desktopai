import axios from "axios"
import { serverhost } from "./serverhost";
export const HandleQuestions=async(question:string)=>{
const res=await axios.post(serverhost('query'),{question:question});
return res;
}