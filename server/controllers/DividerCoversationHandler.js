const {ConversationModel} =require('../Schemas');
 const DividerConversationHandler=async(req,res,next)=> {
    const {conversationId,query,response}=req.body
    try {
      const conversation = await ConversationModel.findOne({ conversationId });
      if (!conversation) {
        console.error(`Conversation with ID ${conversationId} not found.`);
        return null;
      }
      conversation.conversation.push({ query, response });
      const updatedConversation = await conversation.save();
      console.log(`Data added to conversation with ID ${conversationId}:`, { query, response });
      return updatedConversation;
    } catch (err) {
      console.error(`Error adding data to conversation with ID ${conversationId}:`, err.message);
      throw err;
     
    }

}
module.exports=DividerConversationHandler;