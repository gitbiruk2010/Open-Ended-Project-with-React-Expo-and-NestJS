import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    if (!Number.isFinite(id)) { // Check for valid number
      console.error('Invalid ID:', id);
      throw new Error('Invalid ID provided');
    }
    return this.taskRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    if (!Number.isFinite(id)) { // Check for valid number
      console.error('Invalid ID:', id);
      throw new Error('Invalid ID provided');
    }
    await this.taskRepository.update(id, updateTaskDto);
    return this.taskRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    if (!Number.isFinite(id)) { // Check for valid number
      console.error('Invalid ID:', id);
      throw new Error('Invalid ID provided');
    }
    await this.taskRepository.delete(id);
  }
}
