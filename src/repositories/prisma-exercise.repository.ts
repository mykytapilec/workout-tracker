import { prisma } from '../database/prisma.js';
import { CreateExerciseInput, Exercise } from '../types/exercise.types.js';

export class PrismaExerciseRepository {
  public async findAllByWorkoutId(workoutId: string): Promise<Exercise[]> {
    return prisma.exercise.findMany({
      where: {
        workoutId,
      },
    });
  }

  public async findById(id: string): Promise<Exercise | null> {
    return prisma.exercise.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(workoutId: string, data: CreateExerciseInput): Promise<Exercise> {
    return prisma.exercise.create({
      data: {
        ...data,
        workoutId,
      },
    });
  }

  public async update(id: string, data: Partial<CreateExerciseInput>): Promise<Exercise> {
    return prisma.exercise.update({
      where: {
        id,
      },
      data,
    });
  }

  public async delete(id: string): Promise<void> {
    await prisma.exercise.delete({
      where: {
        id,
      },
    });
  }
}

export const prismaExerciseRepository = new PrismaExerciseRepository();
