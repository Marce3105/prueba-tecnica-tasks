export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: 'todo' | 'in_progress' | 'done';
    priority?: 'low' | 'medium' | 'high';
    dueDate?: string;
}
