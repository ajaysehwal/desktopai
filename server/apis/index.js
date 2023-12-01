const {ResponseController,StartConversationsController,DividerConversationHandler}=require("../controllers");
const ExpressApp=(app,cors)=>{
  app.post('/query',cors(),ResponseController);
  app.post('/startnewtalk',cors(),StartConversationsController);
  app.post('/normal_conversation',cors(),DividerConversationHandler);
 
}

module.exports=ExpressApp;