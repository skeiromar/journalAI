import express from 'express';
import messagesRouter from './src/routes/messages';
// import searchRouter from './routes/search';

const app = express();

app.use('/messages', messagesRouter);
// app.use('/search', searchRouter);

export default app;
