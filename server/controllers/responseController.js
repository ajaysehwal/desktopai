const GETResponse=require('../services/AI-Services')
const ResponseController=async(req,res,next)=>{
    const {question} =req.body;
      try{
       await GETResponse(question,res);
       }catch(err){
       next(err)
      }
     
}

module.exports=ResponseController;
