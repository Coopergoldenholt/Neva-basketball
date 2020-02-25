const bcrypt = require("bcryptjs");
const saltRounds = 12;

module.exports = {
	registerUserLocal: async (req, res) => {
		const db = req.app.get("db");
		const { email, password, name, subscription } = req.body;
		const [existingUser] = await db.user.get_user_by_email(email);
		if (existingUser) {
			return res.status(400).send("Email is already in use");
		}
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(password, salt);
		const [user] = await db.user.create_user_local([
			name,
			email,
			hash,
			subscription
		]);
		req.session.user = {
			name: existingUser.full_name,
			email: user.email,
			loggedIn: true,
			subscription: user.subscription
		};
		res.send(req.session.user);
	},

	loginUserLocal: async (req, res) => {
		const db = req.app.get("db");
		const { email, password } = req.body;
		const [existingUser] = await db.user.get_user_by_email(email);
		if (!existingUser) {
			return res.status(401).send("Username or password incorrect");
		}
		const result = await bcrypt.compare(password, existingUser.password);
		if (result) {
			req.session.user = {
				name: existingUser.full_name,
				email: existingUser.email,
				loggedIn: true,
				subscription: existingUser.subscription
			};
			res.status(200).send(req.session.user);
		} else res.status(401).send("Username or password incorrect");
	},
	loginUserFacebook: async (req, res) => {
		const db = req.app.get("db");
		const { email, name, accessToken } = req.body.session;

		const [existingUser] = await db.user.get_user_by_email(email);
		if (!existingUser) {
			const [newFacebookUser] = await db.user.create_user_facebook([
				name,
				email,
				"none"
			]);
			req.session.user = {
				name: newFacebookUser.full_name,
				email: newFacebookUser.email,
				loggedIn: true,
				subscription: newFacebookUser.subscription,
				accessToken: accessToken
			};
			res.status(200).send(req.session.user);
		} else {
			req.session.user = {
				name: existingUser.full_name,
				email: existingUser.email,
				loggedIn: true,
				subscription: existingUser.subscription,
				accessToken: accessToken
			};
			res.status(200).send(req.session.user);
		}
	},
	getUser: async (req, res) => {
		if (req.session.user) {
			res.status(200).send(req.session.user);
		} else res.status(400).send("No Session");
	},
	logout: async (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	}
};
