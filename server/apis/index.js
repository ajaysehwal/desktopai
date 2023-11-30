const GETResponse=require('../services/AI-Services')
const ExpressApp=(app,cors)=>{
 
  app.post('/query',cors(),async(req,res,next)=>{
   const {question} =req.body;
     try{
      await GETResponse(question,res);
     }catch(err){
      next(err)
     }
    
  })
 
}

module.exports=ExpressApp;