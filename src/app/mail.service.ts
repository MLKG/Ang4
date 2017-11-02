import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message: string = '该消息来自MailService';
  constructor() { }

}
