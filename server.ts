import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import app from './app'; 
import database from './database';

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Wsadsds!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
