const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let headlineSchema = new Schema({

    title: {
        type: String,
        require: true,
        unique: true
    },
    link: {
        type: String,
        require: true,
        unique: true
    },
    author: {
        type: String,
    },
    authorLink: {
        type: String,
    },
    imgSrc: {
        type: String,
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    date: String, 
        saved :{
        type: Boolean,
        default: false
    }
});

let Headline = mongoose.model("Headline", headlineSchema)

module.exports = Headline;