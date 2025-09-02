import {Router} from "express";

const router = Router()

router.post('/chatbot', (req, res) => {
	res.json({ message: 'Chatbot response placeholder' });
});

export default router
