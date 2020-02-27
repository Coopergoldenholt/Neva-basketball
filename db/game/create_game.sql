insert into games (opponent, user_id, date)
values($1, $2, $3)
returning *;