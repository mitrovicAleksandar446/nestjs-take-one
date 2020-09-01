import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TasksModule, CatsModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
