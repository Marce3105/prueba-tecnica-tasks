import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTaskDto): Promise<{
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
    update(id: string, dto: UpdateTaskDto): Promise<{
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
