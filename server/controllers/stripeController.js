const { STRIPE_SECRET_KEY } = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

module.exports = {
	stripePlayerBasicSubscription: async (req, res) => {
		const { name, email, token } = req.body;
		const customer = await stripe.customers.create({
			name: name,
			source: token.token.id,
			email: email
		});

		// const plans = stripe.plans.retrieve("plan_GxCpQuOKH9I6Ye", function(
		// 	err,
		// 	plan
		// ) {
		// 	// asynchronously called
		// });
		const subscription = await stripe.subscriptions.create({
			customer: customer.id,
			items: [{ plan: "plan_GxCpQuOKH9I6Ye" }]
		});
		res.status(200).send("Subscription Started");
	}
};
