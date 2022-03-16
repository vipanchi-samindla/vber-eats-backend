import express, { Application } from 'express';

require('dotenv').config();

const app: Application = express();
const port = process.env.PORT;
app.get('/', (_req, res) => {
  res.send('Server Works');
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
