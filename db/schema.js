const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "New Title"
    },
    description: {
        type: String,
        default: "New Idea Description"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ideas: [IdeaSchema]
});

const Idea = mongoose.model('Idea', IdeaSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Idea, User
}