insert into users (full_name, email, customer_id)
values($1, $2, $3)
returning *;