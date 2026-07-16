import { prismaWorkoutRepository } from '../repositories/prisma-workout.repository.js';
import { CreateWorkoutInput, Workout } from '../types/workout.types.js';

export class WorkoutService {
  public async getAll(): Promise<Workout[]> {
    return prismaWorkoutRepository.findAll();
  }

  public async create(data: CreateWorkoutInput): Promise<Workout> {
    return prismaWorkoutRepository.create(data);
  }

  public async getById(id: string): Promise<Workout | null> {
    return prismaWorkoutRepository.findById(id);
  }

  public async update(id: string, data: CreateWorkoutInput): Promise<Workout | null> {
    return prismaWorkoutRepository.update(id, data);
  }

  public async delete(id: string): Promise<boolean> {
    return prismaWorkoutRepository.delete(id);
  }
}

export const workoutService = new WorkoutService();
