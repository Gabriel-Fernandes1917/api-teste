const express = require("express");
const Prices = require("../models/prices");
const ExternalUsers = require("../models/externalUsers");
const authMiddleWare = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleWare);

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
	
  const [price] = await Prices.find({productId}, null, ).sort([['createAt', -1]]).limit(1).lean();

  return res.send(price);
});

router.post("/register", async (req, res) => {
  const { userId } = req;
	
  const user = await ExternalUsers.findById(userId);
	console.log(user)

  if (!user) return res.status(404).send("User not founded!");

  const { productId, price } = req.body;

	if(!price || !productId) return res.status(403).send("productId and price need to be informed!")

  const products = await Prices.create({
    productId: productId,
    enterpriseId: user.cnpj,
		createBy: userId,
    value: price,
  });

  return res.send(products);
});

module.exports = (app) => app.use("/prices", router);
