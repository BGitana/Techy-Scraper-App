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
})

let Note = mongoose.model("Note", noteSchema);

module.exports = Note;