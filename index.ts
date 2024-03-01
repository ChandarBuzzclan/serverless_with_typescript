import serverless from 'serverless-http';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { eventService } from './src/services/event/index';
import { messageController } from './src/controllers/message/index';
import { templateController } from './src/controllers/template';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

const { CommonRoute, UserRoute } = require('./src/routes/index');
app.use('/api/v1/user', [UserRoute]);
app.use('/api/v1', [CommonRoute]);

app.get('/serverless-producer', messageController.produceMessage);
app.post('/template-generator', templateController.generateTemplate);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = 'Oops! page not found';
  res.status(404).send({ status: 404, message: error });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const status = err.status || 400;
  res.status(status).send({ status: status, message: err.message });
});

export const handler = serverless(app);
