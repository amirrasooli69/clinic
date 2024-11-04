import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'به پروژه کلینیک خوش آمدید';
  }
}