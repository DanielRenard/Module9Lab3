"use strict";

const User = require("./user"); //require the model
//const Post = require("./")

async function init() {
  await User.sync(); // sync the model
  //await Post.sync()
  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  // also export any extra models here
  //Post,
};