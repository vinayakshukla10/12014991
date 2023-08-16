import express from 'express';
import rootRouter from './conrtrollers';

const app = express();

app.use(express.json())

app.use('/', rootRouter)

app.listen(8008, () => {
  console.log('Express server listening on port 8008');
});