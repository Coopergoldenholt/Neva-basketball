require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const userCtrl = require("./controllers/userSessionController");
const gameCtrl = require("./controllers/inGameSessionController");
const statCtrl = require("./controllers/gamesController");

const app = express();

app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);

//* USER API CALLS
app.get("/api/user", userCtrl.getUser);
app.post("/api/login/local", userCtrl.loginUserLocal);
app.post("/api/register", userCtrl.registerUserLocal);
app.post("/api/login/facebook", userCtrl.loginUserFacebook);

//* GAME API CALLS
app.post("/api/user/game", gameCtrl.createGameSession);
app.put("/api/user/game", gameCtrl.updateGameStat);
app.post("/api/user/game/stats", gameCtrl.endGame);

//* STAT API CALLS
app.get("/api/user/stats/:userId", statCtrl.getRecentGames);

massive(CONNECTION_STRING).then(db => {
	app.set("db", db);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`));
});
