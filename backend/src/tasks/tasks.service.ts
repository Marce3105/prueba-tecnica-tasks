import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


// Servicio para manejar la lógica de las tareas
@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // Crea una nueva tarea con los datos enviados desde el DTO
  async create(dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description ?? null, // Si no hay descripción, se guarda como null
        status: dto.status ?? 'todo', // Valor por defecto "todo"
        priority: dto.priority ?? 'medium', // Valor por defecto "medium"
        dueDate: dto.dueDate ? new Date(dto.dueDate) : null, // Convierte string a Date o null
      },
    });
  }

  // Devuelve todas las tareas
  async findAll() {
    return this.prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
  }
  // Busca una tarea por su ID
  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  // Actualiza una tarea según su ID
  async update(id: string, dto: UpdateTaskDto) {
  const task = await this.findOne(id); // Verifica que la tarea exista

  return this.prisma.task.update({
    where: { id },
    data: {
      title: dto.title ?? task.title, // Mantiene el valor anterior si no se envía
      description: dto.description ?? task.description,
      status: dto.status ?? task.status,
      priority: dto.priority ?? task.priority,
      dueDate: dto.dueDate ? new Date(dto.dueDate) : task.dueDate,
    },
  });
}

  // Elimina una tarea según su ID
  async remove(id: string) {
    await this.findOne(id); // Verifica que la tarea exista antes de eliminar
    return this.prisma.task.delete({ where: { id } });
  }
}
