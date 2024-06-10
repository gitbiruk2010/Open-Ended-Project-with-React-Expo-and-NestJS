import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',  // Replace with your MySQL password
      database: 'task_manager',   // The database name for the app
      autoLoadEntities: true,
      synchronize: true,          // Automatically creates tables
    }),
    TasksModule,
  ],
})
export class AppModule {}
