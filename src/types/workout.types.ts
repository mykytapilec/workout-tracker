export interface Workout {
  id: string;
  name: string;
  createdAt: Date;
}

export interface CreateWorkoutInput {
  name: string;
}
