import express, { Application } from 'express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app: Application = express();
const port = process.env.PORT;
app.get('/', (_req, res) => {
  res.send('Server Works');
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening on port ${port}`);
});
