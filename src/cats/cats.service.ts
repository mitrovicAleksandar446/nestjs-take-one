import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  public log(): void {
    console.log('console service...');
  }
}
