import serverless from 'serverless-http';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'fs'
import { eventService } from './src/services/event/index';
import { messageController } from './src/controllers/message/index';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

const { CommonRoute, UserRoute , ContentfulRoute } = require('./src/routes/index');
app.use('/api/v1/user', [UserRoute]);
app.use('/api/v1/contentful',[ContentfulRoute]);
app.use('/api/v1', [CommonRoute]);

app.get('/serverless-producer', messageController.produceMessage);

app.post('/saveRequest', (req: Request, res: Response) => {
  // Get the request body
  const requestBody = req.body;
  // Read existing data from the JSON file, if any
  let existingData: any[] = [];
  try {
      existingData = JSON.parse(fs.readFileSync('requests.json', 'utf-8'));
  } catch (err) {
      console.error("Error reading requests.json:", err);
  }

  // Add the new request to the existing data
  existingData.push(requestBody);

  // Write the updated data back to the JSON file
  fs.writeFile('requests.json', JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
          console.error("Error writing to requests.json:", err);
          res.status(500).send('Internal Server Error');
      } else {
          console.log("Request saved successfully.");
          res.status(200).send('Request saved successfully.');
      }
  });
});

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
