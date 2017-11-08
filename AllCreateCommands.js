---------------MONGO---------------
use bigdata_ca1_emil_lubczynski
load("C:\\BigDataCA1\\insertMovies.js")
load("C:\\BigDataCA1\\insertPosts.js")

insertMovies("Fight Club","Chuck Palahniuk",1999,["Brad Pitt", "Edward Norton"])
insertMovies("Pulp Fiction","Quentin Tarantino",1994,["John Trevolta", "Uma Thurman"])
insertMovies("Inglorious Basterds","Quentin Tarantino",2009,["Brad Pitt", "Diane Kruger", "Eli Roth"])

load("C:\\BigDataCA1\\insertBook.js")
insertBooks("The Hobbit: An Unexpected Journey","J.R.R Tolkein",2012,"The Hobbit")
insertBooks("The Hobbit: The Desolation of Smaug","J.R.R Tolkein",2013,"The Hobbit")
insertBooks("The Hobbit: The Battle of the Five Armies","J.R.R Tolkein",2012,"The Hobbit", "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.")
insertBooks("Pee Wee Herman's Big Adventure")
insertBooks("Avatar")

PART7
db.users.insert({username: "GoodGuyGreg",first_name:"Good Guy", last_name: "Greg"})
db.users.insert({username: "ScumbagSteve",ful_name:[{first:"Scumbag",last:"Steve"}]})
insertPosts("GoodGuyGreg","Passes out at party","Passes out at party")
insertPosts("GoodGuyGreg","Steals your identity","Raises your credit score")
insertPosts("GoodGuyGreg","Reports a bug in your code","Sends you a Pull Request")
insertPosts("ScumbagSteve","Borrows something","Sells it")
insertPosts("ScumbagSteve","Borrows everything","The end")
insertPosts("ScumbagSteve","Forks your repo on github","Sets to private")

insertComments("GoodGuyGreg","Hope you got a good deal!","59fb1c02eaf58592c026add1")
insertComments("GoodGuyGreg","What's mine is yours!","59fb1c02eaf58592c026add2")
insertComments("GoodGuyGreg","Don't violate the licensing agreement!","59fb1c02eaf58592c026add3")
insertComments("ScumbagSteve","It still isn't clean","59fb1b66eaf58592c026adce")
insertComments("ScumbagSteve","Denied your PR cause I found a hack","59fb1bdbeaf58592c026add0")







---------------Postgres---------------
create database bigdata_ca1_emil_lubczynski;
\c bigdata_ca1_emil_lubczynski;
------The correct shema---------------
create table movies(movie_id SERIAL PRIMARY KEY,title varchar(60),writer varchar(40),year int,franchise varchar(11),synopsis text);

create table actors(actor_id SERIAL PRIMARY KEY,actor_name varchar(20) Unique);

create table movies_actors(actor_id INTEGER REFERENCES actors(actor_id),movie_id INTEGER REFERENCES movies(movie_id));

insert into movies_actors (actor_id,movie_id) Values(6,1),(7,1),
(8,2),(9,2),(6,3),(10,3),(11,3);

insert into actors (actor_name)
Values('Brad Pitt'),('Edward Norton'),('John Travolta'),
('Uma Thurman'),('Diane Kruger'),('Eli Roth');

insert into movies(title,writer,year) 
Values
('Fight Club','Chuck Palahniuk',1999),
('Pulp Fiction','Quentin Tarantino',1994),
('Inglorious Basterds','Quentin Tarantino',2009);

insert into movies(title,writer,year,franchise) 
Values
('The Hobbit: An Unexpected Journey','J.R.R. Tolkein',2012,'The Hobbit'),
('The Hobbit: The Desolation of Smaug','J.R.R. Tolkein',2013,'The Hobbit');

insert into movies(title,writer,year,franchise,synopsis) 
Values ('The Hobbit: The Battle of the Five Armies','J.R.R. Tolkein',2012,'The Hobbit','Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.');
insert into movies(title) Values('Pee Wee Herman''s Big Adventure'),('Avatar');
----------------------------------------

-----------Alternative wrong way-------------
create table movies(title varchar(60),writer varchar(40),year int,actors text,franchise varchar(11),synopsis text);

insert into movies(title,writer,year,actors) 
Values
('Fight Club','Chuck Palahniuk',1999,'Brad Pitt,Edward Norton'),
('Pulp Fiction','Quentin Tarantino',1994,'John Travolta,Uma Thurman'),
('Inglorious Basterds','Quentin Tarantino',2009,'Brad Pitt,Diane Kruger,Eli Roth');

insert into movies(title,writer,year,franchise) 
Values
('The Hobbit: An Unexpected Journey','J.R.R. Tolkein',2012,'The Hobbit'),
('The Hobbit: The Desolation of Smaug','J.R.R. Tolkein',2013,'The Hobbit');

insert into movies(title,writer,year,franchise,synopsis) 
Values ('The Hobbit: The Battle of the Five Armies','J.R.R. Tolkein',2012,'The Hobbit','Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.');
insert into movies(title) Values('Pee Wee Herman''s Big Adventure'),('Avatar');

-----------------------------------------------

PART7
create table users(user_id SERIAL PRIMARY KEY,username varchar(12),first_name varchar(8),surname varchar(5));
insert into users(username,first_name,surname) 
Values
('GoodGuyGreg','GoodGuy','Greg'),
('ScumbagSteve','Scumbag','Steve');

create table posts(post_id SERIAL PRIMARY KEY,user_id INTEGER REFERENCES users(user_id),title text, body text);
insert into posts(user_id,title,body)
Values
(1,'Passes out at party','Wakes up early and cleans house'),
(1,'Steals your identity','Raises your credit score'),
(1,'Reports a bug in your code','Sends you a Pull Request'),
(2,'Borrows something','Sells it'),
(2,'Borrows everything','The end'),
(2,'Forks your repo on github','Sets to private');

create table comments(comment_id SERIAL PRIMARY KEY,user_id INTEGER REFERENCES users(user_id),post_id INTEGER REFERENCES posts(post_id),comment text);
insert into comments(user_id,post_id,comment)
Values
(1,4,'Hope you got a good deal!'),
(1,5,'What''s mine is yours!'),
(1,6,'Don''t violate the licensing agreement!'),
(2,1,'It still isn''t clean'),
(2,3,'Denied your PR cause I found a hack');

