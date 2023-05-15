import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class BetterLoggerService extends LoggerService {
  override log(message: string): void {
    console.log(`Better Logger service ${this.id} log:${message}`);
  }
}
