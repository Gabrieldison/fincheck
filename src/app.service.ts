import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hellow(): string {
    return 'Hello World!';
  }
}
