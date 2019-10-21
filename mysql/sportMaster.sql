create database sportMasterBlogs;
use sportMasterBlogs;
CREATE TABLE `post`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(45) DEFAULT NULL,
`description` text DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `user`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`username` varchar(45) DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `postComments`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`description` text DEFAULT NULL,
`user_id` int(11) unsigned NULL,
`post_id` int(11) unsigned NULL,
PRIMARY KEY (`id`),
constraint `fk_user_id` foreign key (`user_id`) references `user`(`id`) on delete cascade,
constraint `fk_post_id` foreign key (`post_id`) references `post`(`id`) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into user
	value( null, 'Girmay');
insert into user
	value( null, 'Benjamin');
insert into user
	value( null, 'Christofer');
insert into post
	value( null, 'sport','');
insert into post
	value( null, 'culture','');
insert into post
	value( null, 'IT','');
insert into postComments
	value( null,'','1','1');
insert into postComments
	value( null,'', '1','2');
insert into postComments
	value( null, '','1','3');
insert into postComments
	value( null, '','2','1');
insert into postComments
	value( null, '2','2','');
insert into postComments
	value( null, '2','3','');
insert into postComments
	value( null, '','3','1');
insert into postComments
	value( null, '','3','2');
insert into postComments
	value( null, '','3','3');
