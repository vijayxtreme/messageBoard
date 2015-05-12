var db = require('../db');
//define a post model here by default 
var Post = db.model('Post', {
	username: {type: String, required: true},
	body: {type: String, required: true},
	date: {type: Date, required: true, default: Date.now}
});

module.exports = Post;
