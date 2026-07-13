import { z } from 'zod';

export const createWorkoutSchema = z.object({
  name: z
    .string({
      message: 'Workout name is required',
    })
    .trim()
    .min(1, 'Workout name is required'),
});
