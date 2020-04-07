const { STRIPE_SECRET_KEY } = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

module.exports = {
	stripePlayerBasicSubscription: async (req, res) => {
		const db = req.app.get("db");
		const { token } = req.body;
		const [user] = await db.user.get_user_by_email(req.session.user.email);

		const updatedCustomer = await stripe.customers.update(user.customer_id, {
			source: token.token.id
		});

		const subscription = await stripe.subscriptions.create({
			customer: user.customer_id,
			items: [{ plan: "plan_GxCpQuOKH9I6Ye" }]
		});
		console.log(subscription.plan);
		req.session.user.subscription = subscription.plan.nickname;
		console.log(req.session.user.subscription);
		res.status(200).send(req.session.user);
	}
};
