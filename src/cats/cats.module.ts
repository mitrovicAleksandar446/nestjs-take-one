import { DynamicModule, Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';


@Module({})
export class CatsModule {
  static forRoot(...options: string[]): DynamicModule {
    console.log(`options are ${options}`);
    return {
      module: CatsModule,
      global: true,
      providers: [
        CatsService,
        {
          provide: 'SOMETHING',
          useValue: 'fuzzy',
        },
        {
          provide: 'WORDS',
          useExisting: 'SOMETHING'
        },
      ],
      controllers: [CatsController],
      exports: ['SOMETHING', CatsService],
    };
  }
}
