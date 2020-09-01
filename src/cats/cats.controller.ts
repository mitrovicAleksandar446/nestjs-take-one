import { Controller, Get, HttpException, Inject } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  constructor(@Inject('WORDS') private someWords: string[]) {}

  @Get()
  public index(): Record<string, unknown> {
    return {cat: this.someWords};
  }

}
