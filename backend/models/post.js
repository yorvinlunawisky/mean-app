const mongoose = require('mongoose');

//In Mongoose you have to put the S in capital case in the word "String"
const postSchema =  mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true}
});

module.exports = mongoose.model('Post', postSchema);