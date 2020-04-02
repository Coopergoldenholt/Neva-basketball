insert into users (full_name, email, password, customer_id)
values($1, $2, $3, $4)
returning *;