import { randomUUID } from 'node:crypto';

import { CreateWorkoutInput, Workout } from '../types/workout.types.js';

export class WorkoutRepository {
  private readonly workouts: Workout[] = [];

  public findAll(): Workout[] {
    return this.workouts;
  }

  public findById(id: string): Workout | undefined {
    return this.workouts.find((workout) => workout.id === id);
  }

  public create(data: CreateWorkoutInput): Workout {
    const workout: Workout = {
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
    };

    this.workouts.push(workout);

    return workout;
  }
}

export const workoutRepository = new WorkoutRepository();
