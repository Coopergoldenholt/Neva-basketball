insert into users (full_name, email, password, subscription)
values($1, $2, $3, $4)
returning *;