import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message = '该消息来自MailService';
  messages: Array<{id: number, text: string}> = [
    {id: 0, text: 'Dalin'},
    {id: 1, text: 'Shadows'}
  ];
  update(id, text) {
    this.messages = this.messages.map(msg => {
      return msg.id === id ? {id, text} : msg;
    });
  }
  constructor() {}
}
