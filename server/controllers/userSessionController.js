const bcrypt = require("bcryptjs");
const { STRIPE_SECRET_KEY } = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const saltRounds = 12;

module.exports = {
	registerUserLocal: async (req, res) => {
		const db = req.app.get("db");
		const { email, password, name } = req.body;
		const [existingUser] = await db.user.get_user_by_email(email);
		if (existingUser) {
			return res.status(400).send("Email is already in use");
		}
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(password, salt);
		const customer = await stripe.customers.create({
			name: name,
			email: email
		});

		const [user] = await db.user.create_user_local([
			name,
			email,
			hash,
			customer.id
		]);

		req.session.user = {
			name: user.full_name,
			email: user.email,
			loggedIn: true,
			id: user.id
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
			const customer = await stripe.customers.retrieve(
				existingUser.customer_id
			);
			if (customer.subscriptions) {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					subscription: existingUser.subscription,
					id: existingUser.id,
					subscription: customer.subscriptions.data[0].plan.nickname
				};
			} else {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					subscription: existingUser.subscription,
					id: existingUser.id,
					subscription: "none"
				};
			}

			res.status(200).send(req.session.user);
		} else res.status(401).send("Username or password incorrect");
	},
	loginUserFacebook: async (req, res) => {
		const db = req.app.get("db");
		const { email, name, accessToken } = req.body.session;

		const [existingUser] = await db.user.get_user_by_email(email);
		if (!existingUser) {
			const customer = await stripe.customers.create({
				name: name,
				email: email
			});
			const [newFacebookUser] = await db.user.create_user_facebook([
				name,
				email,
				customer.id
			]);

			req.session.user = {
				name: newFacebookUser.full_name,
				email: newFacebookUser.email,
				loggedIn: true,
				subscription: "none",
				accessToken: accessToken,
				id: newFacebookUser.id,
				customerId: customer.id,
				accessToken: accessToken
			};

			res.status(200).send(req.session.user);
		} else {
			const customer = await stripe.customers.retrieve(
				existingUser.customer_id
			);

			if (customer.subscriptions.data.length > 0) {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					accessToken: accessToken,
					id: existingUser.id,
					subscription: customer.subscriptions.data[0].plan.nickname,
					accessToken: accessToken
				};
			} else {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					subscription: existingUser.subscription,
					accessToken: accessToken,
					id: existingUser.id,
					subscription: "none",
					accessToken: accessToken
				};
			}
			console.log(req.session.user);
			res.status(200).send(req.session.user);
		}
	},
	loginUserGoogle: async (req, res) => {
		const db = req.app.get("db");
		const { email, name } = req.body.session.profileObj;

		const [existingUser] = await db.user.get_user_by_email(email);
		if (!existingUser) {
			const customer = await stripe.customers.create({
				name: name,
				email: email
			});
			const [newGoogleUser] = await db.user.create_user_facebook([
				name,
				email,
				customer.id
			]);

			req.session.user = {
				name: newGoogleUser.full_name,
				email: newGoogleUser.email,
				loggedIn: true,
				subscription: "none",
				id: newGoogleUser.id,
				customerId: customer.id
			};

			res.status(200).send(req.session.user);
		} else {
			const customer = await stripe.customers.retrieve(
				existingUser.customer_id
			);

			if (customer.subscriptions.data.length > 0) {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					id: existingUser.id,
					subscription: customer.subscriptions.data[0].plan.nickname
				};
			} else {
				req.session.user = {
					name: existingUser.full_name,
					email: existingUser.email,
					loggedIn: true,
					subscription: existingUser.subscription,
					id: existingUser.id,
					subscription: "none"
				};
			}

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
