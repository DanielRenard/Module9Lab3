"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Comment.sync();
  // also sync any extra models here
}

init();

const User = sequelize.define("User", {
  firstName: Sequelize.STRING,
});

const Post = sequelize.define("Post", {
  // age: Sequelize.STRING,
  id: {
    type: Sequelize.INTEGER,
    references: {
      model: "users", // 'Users' refers to table name
      key: "id", // 'id' refers to column name in Users table
    },
  },
});

const Comment = sequelize.define("Comment", {
  // age: Sequelize.STRING,
  id: {
    type: Sequelize.INTEGER,
    references: {
      model: "users", // 'Users' refers to table name
      key: "id", // 'id' refers to column name in Users table
    },
  },
});

User.hasMany(Post); // Set one to many relationship
User.hasMany(Comment); // Set one to many relationship

Comment.belongsTo(Post);
Post.belongsTo(User)

// this is where foreign keys go
// post belongs to a user
// user has many posts // check
// comment belongs to a user // check
// comment belongs to a post

module.exports = {
  User, // export the model
  // also export any extra models here
  Post,
  Comment,
};
