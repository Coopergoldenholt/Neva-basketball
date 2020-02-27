select * from basic_stats b
join games g on g.id = b.game_id
where b.user_id = $1
order by g.date desc;