import { workoutRepository } from '../repositories/workout.repository.js';
import { CreateWorkoutInput, Workout } from '../types/workout.types.js';

export class WorkoutService {
  public getAll(): Workout[] {
    return workoutRepository.findAll();
  }

  public create(data: CreateWorkoutInput): Workout {
    return workoutRepository.create(data);
  }

  public getById(id: string): Workout | undefined {
    return workoutRepository.findById(id);
  }

  public update(id: string, data: CreateWorkoutInput): Workout | undefined {
    return workoutRepository.update(id, data);
  }

  public delete(id: string): boolean {
    return workoutRepository.delete(id);
  }
}

export const workoutService = new WorkoutService();
