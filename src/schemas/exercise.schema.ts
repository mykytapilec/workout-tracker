import { z } from 'zod';

export const createExerciseSchema = z.object({
  name: z.string().trim().min(1, 'Exercise name is required'),

  sets: z.int('Sets must be an integer').positive('Sets must be greater than 0'),

  reps: z.int('Reps must be an integer').positive('Reps must be greater than 0'),

  weight: z.number().min(0, 'Weight cannot be negative').optional(),
});

export const updateExerciseSchema = createExerciseSchema.partial();
