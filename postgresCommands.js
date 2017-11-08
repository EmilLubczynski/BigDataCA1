-----Wrong table commands-----
PART3
1. select * from movies;
2. select * from movies where writer = 'Quentin Tarantino';
3. select * from movies where actors ILike'%Brad Pitt%';
4. select * from movies where franchise = 'The Hobbit';
5. select * from movies where year < 2000 AND year > 1989;
6. select * from movies where year < 2000 OR year > 2010;
-----------------------------

PART3
-- Q1-Q3 Don't work properly--
1. select movies.*, actor_name from movies INNER JOIN actors on movies.movie_id = movies_actors.movie_id;
2. select movies.* from movies where movies.writer = 'Quentin Tarantino';
3.
4. select * from movies where franchise = 'The Hobbit';
5. select title from movies where year < 2000 AND year > 1989;
6. select title from movies where year < 2000 OR year > 2010;

PART4
1. UPDATE movies SET synopsis = 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.' WHERE title= 'The Hobbit: An Unexpected Journey';
2. UPDATE movies SET synopsis = 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.' WHERE title ='The Hobbit: The Desolation of Smaug';

3. 

PART5
1. select title, synopsis from movies where synopsis ILIKE'%Bilbo%';
2. select title, synopsis from movies where synopsis ILIKE'%Gandalf%';
3. select title, synopsis from movies where synopsis NOT ILIKE'%Gandalf%' AND synopsis ILIKE'%Bilbo%';
4. select title, synopsis from movies where synopsis ILIKE'%hobbit%' OR synopsis ILIKE'%Dwarves%';
5. select title, synopsis from movies where synopsis ILIKE'%gold%' AND synopsis ILIKE'%Dragon%';

PART6
1. DELETE from movies where title = 'Pee Wee Herman''s Big Adventure';
2. DELETE from movies where title = 'Avatar';

PART8
1. select username from users;
2. select title,body from posts;
3. select title,body from users, posts where users.username = 'GoodGuyGreg' AND posts.user_id = users.user_id;
4. select posts.title,posts.body from users, posts where users.username = 'ScumbagSteve' AND posts.user_id = users.user_id;
5. select comment from comments;
6. select comment from comments, users where users.username ='GoodGuyGreg' and comments.user_id = users.user_id;
7. select comment from comments, users where users.username ='ScumbagSteve' and comments.user_id = users.user_id;
8. select comment from comments, posts where posts.title = 'Reports a bug in your code' and comments.post_id = posts.post_id;