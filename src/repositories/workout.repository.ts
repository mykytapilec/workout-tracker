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

  public update(id: string, data: CreateWorkoutInput): Workout | undefined {
    const workout = this.findById(id);

    if (!workout) {
      return undefined;
    }

    workout.name = data.name;

    return workout;
  }

  public delete(id: string): boolean {
    const index = this.workouts.findIndex((workout) => workout.id === id);

    if (index === -1) {
      return false;
    }

    this.workouts.splice(index, 1);

    return true;
  }
}

export const workoutRepository = new WorkoutRepository();
