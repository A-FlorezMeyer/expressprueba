const fs = require("fs");

class Message {
  value = "1;1;1;1";

  async newSnifferMessage(newMessage) {
    this.value = await newMessage.toString("utf8");
   
  };
};

module.exports = { Message};
