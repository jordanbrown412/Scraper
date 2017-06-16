var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _titleId: {
        type: Schema.Types.ObjectId,
        ref: "Aricle"
    },
    comment: String
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

