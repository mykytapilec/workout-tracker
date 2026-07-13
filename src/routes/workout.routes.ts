import { Router } from 'express';

import { createWorkout, getWorkoutById, getWorkouts } from '../controllers/workout.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createWorkoutSchema } from '../validators/workout.validator.js';

export const workoutRouter = Router();

workoutRouter.get('/', getWorkouts);

workoutRouter.get('/:id', getWorkoutById);

workoutRouter.post('/', validate(createWorkoutSchema), createWorkout);
