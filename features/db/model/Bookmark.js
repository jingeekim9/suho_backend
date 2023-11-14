const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
    questionId: { type: Number, required: true, },
    username: {type: String, required: true}
})

module.exports = mongoose.model("bookmark", BookmarkSchema, "Bookmarks")