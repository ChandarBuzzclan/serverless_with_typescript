import { LogService } from './log.service';
import Logger from './logger';

export const logService = new LogService(Logger);
