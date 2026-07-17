import { CreateExerciseInput, Exercise } from '../types/exercise.types.js';
import { prismaExerciseRepository } from '../repositories/prisma-exercise.repository.js';

export class ExerciseService {
  public async getAllByWorkoutId(workoutId: string): Promise<Exercise[]> {
    return prismaExerciseRepository.findAllByWorkoutId(workoutId);
  }

  public async getById(id: string): Promise<Exercise | null> {
    return prismaExerciseRepository.findById(id);
  }

  public async create(workoutId: string, data: CreateExerciseInput): Promise<Exercise> {
    return prismaExerciseRepository.create(workoutId, data);
  }

  public async update(id: string, data: Partial<CreateExerciseInput>): Promise<Exercise | null> {
    const exercise = await prismaExerciseRepository.findById(id);

    if (!exercise) {
      return null;
    }

    return prismaExerciseRepository.update(id, data);
  }

  public async delete(id: string): Promise<boolean> {
    const exercise = await prismaExerciseRepository.findById(id);

    if (!exercise) {
      return false;
    }

    await prismaExerciseRepository.delete(id);

    return true;
  }
}

export const exerciseService = new ExerciseService();
