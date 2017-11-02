import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message: string;
  constructor() {
    this.message = '该消息来自MailService';
  }
}
