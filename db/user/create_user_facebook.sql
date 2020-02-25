insert into users (full_name, email, subscription)
values($1, $2, $3)
returning *;