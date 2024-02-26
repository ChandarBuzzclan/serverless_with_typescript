import { inspect } from 'util';

/**
 * Service to log messages. Usesa the standart console object
 */
export class LogService {
  // constructor(private readonly logger: any) {
  //   this.logger = logger;
  // }
  /**
   * Creates a info log
   * @param tag associate the log to a specific service or file
   * @param messages does log objects up to property depth 6
   */
  info(tag: string, message: any) {
    console.log(message);
    // this.logger.info(this.buildLogMessage(this.tintGreen, tag, ...messages));
  }

  /**
   * Creates a error log
   * @param tag associate the log to a specific service or file
   * @param messages does log objects up to property depth 6
   */
  error(tag: string, ...messages: any[]) {
    console.log('you are in error');
    return 'error';
    // this.logger.error(this.buildLogMessage(this.tintRed, tag, ...messages));
  }

  private buildLogMessage(tint: (v: string) => string, tag: string, ...messages: any[]) {
    return `${tint(tag)}: ${messages
      .map((m) => (m instanceof Object ? inspect(m, true, 6, true) : m))
      .join(' ')}`;
  }

  private tintGreen(value: string) {
    return `\x1b[32m[${value}]\x1b[0m`;
  }

  private tintRed(value: string) {
    return `\x1b[31m[${value}]\x1b[0m`;
  }
}
