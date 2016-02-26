begin ;
create table users (
    user_id int(10) not null auto_increment,
    user_name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    primary key (user_id)
);
