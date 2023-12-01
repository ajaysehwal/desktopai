const {startNewConversation}=require('../Schemas')
class ManageConversations{
    async StartNewConversation(name){
      const start= await startNewConversation(name)
      return start;
    }


}

module.exports=ManageConversations;
