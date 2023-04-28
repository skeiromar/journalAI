import express from 'express';
// import messageService from '../services/message.service';

const router = express.Router();

router.get('/dud', async (req, res) => {
//   const messages = await messageService.getMessages();
  res.json({ message: 'Hello World!'});
});

export default router;
