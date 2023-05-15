import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  id = 0;
  constructor() {
    this.id = Math.random() * 100;
    console.log(`Logger service ${this.id} created`);
  }

  log(message: string) {
    console.log(`Logger service ${this.id} log:${message}`);
  }
}
