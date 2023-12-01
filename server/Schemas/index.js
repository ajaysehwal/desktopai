const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const queryResponseSchema = new mongoose.Schema({
  query: {
    type: String,
    required: false,
  },
  response: {
    type: String,
    required: true,
  },
});

const conversationSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: true,
    unique: true,
  },
  conversationName: {
    type: String,
    required: true,
  },
  conversation: [queryResponseSchema],
});
const ConversationModel = mongoose.model('querys', conversationSchema);

async function startNewConversation(conversationName) {
  const newConversationId = uuidv4();

  const newConversation = new ConversationModel({
    conversationId: newConversationId,
    conversationName: conversationName,
    conversation: [], 
  });

  
  try {
    const res = await newConversation.save();
    console.log(`New conversation "${conversationName}" started with conversationId: ${newConversationId}`);
    return res;
  } catch (err) {
    console.error(err);
  }
}
module.exports={startNewConversation,ConversationModel};

