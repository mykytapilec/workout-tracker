import { Router } from 'express';

import { createWorkout, getWorkouts } from '../controllers/workout.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createWorkoutSchema } from '../validators/workout.validator.js';

export const workoutRouter = Router();

workoutRouter.get('/', getWorkouts);

workoutRouter.post('/', validate(createWorkoutSchema), createWorkout);
