select 
count(*) as number_of_games,
avg((layup_made * 2) + (close_range_made * 2) + (free_throw_made) + (mid_range_made * 2) + (three_made * 3)) as points, 
sum(layup_made + close_range_made + mid_range_made + three_made) as field_goals_made, 
sum((layup_made * 2) + (close_range_made * 2) + (free_throw_made) + (mid_range_made * 2) + (three_made * 3)) as total_points, 
sum(layup_shot + close_range_shot + mid_range_shot + three_shot) as field_goals_shot,
sum(layup_shot) as layup_shot,
sum(close_range_shot) as close_range_shot,
sum(mid_range_shot) as mid_range_shot,
sum(three_shot) as three_shot,
sum(free_throw_shot) as free_throw_shot,
sum(layup_made) as layup_made,
sum(close_range_made) as close_range_made,
sum(mid_range_made) as mid_range_made,
sum(three_made) as three_made,
sum(free_throw_made) as free_throw_made,
sum(offensive_rebound) as offensive_rebound,
sum(defensive_rebound) as defensive_rebound,
sum(steal) as steal,
sum(assist) as assist,
sum(block) as block,
sum(turnover) as turnover
from player_stats
where user_id = $1;