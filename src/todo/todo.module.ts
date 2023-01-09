import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/todo/todo.entity';
import { TodosController } from './todo.controller';
import { TodosService } from './todo.service';
@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodosController],
    providers: [TodosService],
})
export class TodosModule {}