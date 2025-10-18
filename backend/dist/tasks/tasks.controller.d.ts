import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<{
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        description: string | null;
        status: string;
        priority: string;
        dueDate: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
