import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from 'src/todo/todo.controller';
import { TodosModule } from 'src/todo/todo.module';
import { TodosService } from 'src/todo/todo.service';

@Module({
  imports: [TodosController, TodosModule, TodosService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
