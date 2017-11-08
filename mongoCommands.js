PART3
1. db.movies.find().pretty()        
2. db.movies.find({writer: "Quentin Tarantino"}).pretty()       
3. db.movies.find({actors: "Brad Pitt"}).pretty()        
4. db.movies.find({franchise: "The Hobbit"}).pretty()     
5. db.movies.find({year: {$lt:2000,$gt:1989}},{_id:0,title:1})
6. db.movies.find({$or: [{year: {$lt:2000}}, {year: {$gt:2010}}]},{_id:0,title:1})

PART4
1.	db.movies.update(
	{title:"The Hobbit: An Unexpected Journey"},
	{$set :{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}
	})

2.	db.movies.update(
	{title:"The Hobbit: The Desolation of Smaug"},
	{$set :{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}
	})

3.	db.movies.update(
	{title:"Pulp Fiction"},
	{$push :{actors:"Samuel L. Jackson"}
	})

PART5
1. db.movies.find({synopsis:/Bilbo/i},{_id:0,title:1,synopsis:1}).pretty()
2. db.movies.find({synopsis:/Gandalf/i},{_id:0,title:1,synopsis:1}).pretty()
3. db.movies.find({$and: [{synopsis:/Bilbo/i},{synopsis:{$not:/Gandalf/i}}]},{_id:0,title:1,synopsis:1})
4. db.movies.find({$or: [{synopsis: /hobbit/i} , {synopsis: /dwarves/i} ]}).pretty()
5. db.movies.find({$and: [{synopsis: /gold/i} , {synopsis: /dragon/i} ]}).pretty()

PART6
1. db.movies.remove({title: "Pee Wee Herman's Big Adventure"})
2. db.movies.remove({title: "Avatar"})

PART8
1. db.users.find({},{_id:0,username:1})
2. db.posts.find({},{_id:0,title:1,body:1})
3. db.posts.find({username:"GoodGuyGreg"},{_id:0,title:1,body:1})
4. db.posts.find({username:"ScumbagSteve"},{_id:0,title:1,body:1})
5. db.comments.find({},{_id:0,comment:1})
6. db.comments.find({username:"GoodGuyGreg"},{_id:0,comment:1})
7. db.comments.find({username:"ScumbagSteve"},{_id:0,comment:1})
8. db.comments.find({post: "59fb1bdbeaf58592c026add0"},{_id:0,comment:1})