import { Injectable } from '@nestjs/common';

@Injectable()// frae da lam cai file dung o dau do
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
