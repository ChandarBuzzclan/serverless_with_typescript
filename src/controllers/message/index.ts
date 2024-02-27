import { queueService } from './../../services/queue';
import { MessageController } from './message.controller';
import { logService } from './../../services/log/index';

export const messageController = new MessageController(queueService, logService);
