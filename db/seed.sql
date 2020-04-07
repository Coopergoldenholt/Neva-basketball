CREATE TABLE "users" (
"id" SERIAL PRIMARY KEY,
  "full_name" varchar(40),
  "email" varchar(100) UNIQUE,
  "password" text,
  "customer_id" varchar(100),
  "type_of_user" varchar(50),
  "verified" boolean
);

CREATE TABLE "seasons" (
  "id" int PRIMARY KEY,
  "season" varcahr(6)
);

CREATE TABLE "games" (
  "id" SERIAL PRIMARY KEY,
  "opponent" varchar(40),
  "user_id" int,
  "date" timestamp,
  "season_id" int
);

CREATE TABLE "player_stats" (
  "id" SERIAL PRIMARY KEY,
  "game_id" int,
  "user_id" int,
  "layup_shot" int,
  "layup_made" int,
  "close_range_shot" int,
  "close_range_made" int,
  "free_throw_shot" int,
  "free_throw_made" int,
  "mid_range_shot" int,
  "mid_range_made" int,
  "three_shot" int,
  "three_made" int,
  "offensive_rebound" int,
  "defensive_rebound" int,
  "steal" int,
  "assist" int,
  "block" int,
  "turnover" int,
  "field_goals_attempted" int,
  "field_goals_made" int
);

CREATE TABLE "photos" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "date" timestamp,
  "url" varchar
);

CREATE TABLE "videos" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "date" timestamp,
  "url" varchar
);

CREATE TABLE "posts" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "photo_id" int,
  "video_id" int,
  "content" varchar(10000),
  "date" timestamp,
);

CREATE TABLE "followers" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "follower_id" int
);
CREATE TABLE "likes" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "post_id" int
);

CREATE TABLE "comments" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "post_id" int,
  "content" varchar(1000)
);

ALTER TABLE "games" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "games" ADD FOREIGN KEY ("season_id") REFERENCES "seasons" ("id");

ALTER TABLE "player_stats" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "player_stats" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "photos" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "videos" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("photo_id") REFERENCES "photos" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("video_id") REFERENCES "videos" ("id");

ALTER TABLE "followers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "followers" ADD FOREIGN KEY ("follower_id") REFERENCES "users" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "likes" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "photos" ("id");





-- SELECT * 
--   FROM basic_stats
--  WHERE value IN (SELECT opponent
--                    FROM games
--                   WHERE opponent = 'Bears')
