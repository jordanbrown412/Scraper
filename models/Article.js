var Schema = mongoose.Schema;
var articleSchema = new Schema({

    title: {
        type: String,
        required: true,
        uniue: true
    },

    link: {
        type: String,
        required: true
    }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;