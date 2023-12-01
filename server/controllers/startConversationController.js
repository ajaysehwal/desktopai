const ManageConversations=require('../services/conversation');
const StartConversationController=async(req,res,next)=>{
    const {name}=req.body
     try{
       const StartConversation=new ManageConversations();
       const Response= await StartConversation.StartNewConversation(name);
       res.status(200).json({result:Response});
     }catch(err){
      next(err);
     }
}

module.exports=StartConversationController