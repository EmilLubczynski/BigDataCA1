function insertPosts(username,title,body)
{
	db.posts.insert({
		username : username,
		title : title,
		body : body
	});
}