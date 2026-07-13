import { workoutRepository } from '../repositories/workout.repository.js';
import { CreateWorkoutInput, Workout } from '../types/workout.types.js';

export class WorkoutService {
  public getAll(): Workout[] {
    return workoutRepository.findAll();
  }

  public create(data: CreateWorkoutInput): Workout {
    return workoutRepository.create(data);
  }
}

export const workoutService = new WorkoutService();
