function insertBooks(title,writer,year,franchise,synopsis)
{
	db.movies.insert({
		title : title,
		writer : writer,
		year : year,
		franchise : franchise,
		synopsis : synopsis
	});
}