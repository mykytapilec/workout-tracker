import { prisma } from '../database/prisma.js';

import { CreateWorkoutInput, Workout } from '../types/workout.types.js';

export class PrismaWorkoutRepository {
  public async findAll(): Promise<Workout[]> {
    return prisma.workout.findMany({
      include: {
        exercises: true,
      },
    });
  }

  public async create(data: CreateWorkoutInput): Promise<Workout> {
    return prisma.workout.create({
      data,
      include: {
        exercises: true,
      },
    });
  }

  public async findById(id: string): Promise<Workout | null> {
    return prisma.workout.findUnique({
      where: {
        id,
      },
      include: {
        exercises: true,
      },
    });
  }

  public async update(id: string, data: CreateWorkoutInput): Promise<Workout | null> {
    return prisma.workout.update({
      where: {
        id,
      },
      data,
      include: {
        exercises: true,
      },
    });
  }

  public async delete(id: string): Promise<boolean> {
    await prisma.workout.delete({
      where: {
        id,
      },
    });

    return true;
  }
}

export const prismaWorkoutRepository = new PrismaWorkoutRepository();
