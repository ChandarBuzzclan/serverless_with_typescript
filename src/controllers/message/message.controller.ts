import { QueueService } from './../../interfaces/queue-service.interface';
import { Response } from './../../interfaces/response.interface';
import { Message } from '../../interfaces/message.interface';
import * as Express from 'express';
import { QueuedMessage } from '../../interfaces/queued-message.interface';
import { LogService } from '../../services/log/log.service';

/**
 * Controller to produce new messages for the sqs queue
 */

export class MessageController {
  constructor(
    private readonly queueService: QueueService,
    private readonly logService: LogService,
  ) {}

  public produceMessage = async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction,
  ) => {
    /*
     * call of log services
     */
    this.logService.info('sqs', {
      serviceName: 'produceMessage',
      dateTime: new Date(),
      message: 'call of sqs',
    });
    const message: Message = req.body;

    try {
      const queuedMessage = await this.queueService.enqueueMessage(message);
      res.status(200).send({
        message: 'Produced message',
        payload: queuedMessage,
      } as Response<QueuedMessage>);
    } catch (error) {
      /* call for log service*/
      this.logService.error('sqs', {
        serviceName: 'produceMessage',
        dateTime: new Date(),
        message: 'error in sqs',
        error: error,
      });

      next(error);
    }
  };
}
