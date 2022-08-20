import { Router } from "express";

const router = Router();
router.get("/", (_req, res) => {
	res.send({
		status: res.statusCode,
		message: "Server is online",
		port: process.env.PORT || 3000
	});
});

export default router;
