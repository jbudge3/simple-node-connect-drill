var chats = [];
module.exports = {

  getChats:function(req,res){
    res.json(chats);
  },
  postChats:function(req,res){
    if (req.body.message) {
      chats.push(req.body)
    };
    res.status(200).json('Chat added successfully to Chats array');
  },
  deleteChats:function(req,res){
    chats = [];
    res.status(200).json('Chats were deleted entirely');
  }
};
