const Dealer = require("../Schema/DealerSchema")
const Reseller = require('../Schema/ResellerSchema')
const jwt = require("jsonwebtoken")
 
const ProtectRouter = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: "Unauthorized: No Token Provided" });
		}
		console.log(token)

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized: Invalid Token" });
		}

		const user = await Reseller.findById(decoded.userId) || await Dealer.findById(decoded.userId);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
			console.log(user)


		req.user = user;
		next();
	} catch (err) {
		console.log("Error in dealerProtectRouter middleware", err.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = ProtectRouter
