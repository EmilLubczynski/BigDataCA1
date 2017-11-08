function insertMovies(title,writer,year,actors)
{
	db.movies.insert({
		title : title,
		writer : writer,
		year : year,
		actors : actors
	});
}