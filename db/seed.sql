CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar(40),
  "email" varchar(100) UNIQUE,
  "password" text,
  "country_code" int,
  "subscription" varchar(10)
);

CREATE TABLE "games" (
  "id" int PRIMARY KEY,
  "opponent" varchar(40),
  "user_id" int,
  "date" date
);

CREATE TABLE "basic_stats" (
  "id" int PRIMARY KEY,
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
  "turnover" int
);

ALTER TABLE "games" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "basic_stats" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "basic_stats" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");


