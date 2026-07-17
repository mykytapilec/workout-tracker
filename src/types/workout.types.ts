export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number | null;
  createdAt: Date;
  updatedAt: Date;
  workoutId: string;
}

export interface Workout {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  exercises?: Exercise[];
}

export interface CreateWorkoutInput {
  name: string;
}
