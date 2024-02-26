import { QueueService } from './../../interfaces/queue-service.interface';
import { Response } from './../../interfaces/response.interface';
import { Message } from '../../interfaces/message.interface';
import * as Express from 'express';
import { QueuedMessage } from '../../interfaces/queued-message.interface';
import { LogService } from '../../interfaces/log-service.interface';

/**
 * Controller to produce new messages for the sqs queue
 */

export class MessageController {
  queueService: any;
  logService: any;

  constructor(QueueService: any, LogService: any) {
    this.logService = LogService;
    this.queueService = QueueService;

    console.log('log service', this.logService.info('hello', 'ramesh'));
  }

  public async produceMessage(req: Express.Request, res: Express.Response) {
    console.log('this', this.logService.info('hello', 'ramesh'));

    res.status(200).send('message from logs');
    // try {
    //   const queuedMessage = await this.queueService.enqueueMessage(message);
    //   res.status(200).send({
    //     message: 'Produced message',
    //     payload: queuedMessage,
    //   } as Response<QueuedMessage>);
    // } catch (eror) {
    //   res.status(200).send({
    //     message: 'error',
    //   });
    // }
  }
}
