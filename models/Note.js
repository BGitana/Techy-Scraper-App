const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let noteSchema = new Schema({
    user: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    },


// //////////////////demo/////////////////

    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    noteText: String

//////////////////demo/////////////////


})

let Note = mongoose.model("Note", noteSchema);

module.exports = Note;