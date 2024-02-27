import { inspect } from 'util';

/**
 * Service to log messages. Usesa the standart console object
 */
export class LogService {
  constructor(private readonly logger: any) {
    this.logger = logger;
  }
  /**
   * Creates a info log
   * @param tag associate the log to a specific service or file
   * @param messages does log objects up to property depth 6
   */
  info(tag: string, messages: any) {
    this.logger.info({ tag, ...messages });
  }

  /**
   * Creates a error log
   * @param tag associate the log to a specific service or file
   * @param messages does log objects up to property depth 6
   */
  error(tag: string, ...messages: any) {
    // console.log(tag, messages);
    this.logger.error({ tag, ...messages });
  }
}
