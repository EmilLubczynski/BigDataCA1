function insertComments(username,comment,post)
{
	db.comments.insert({
		username : username,
		comment : comment,
		post : post
	});
}