import { Router } from 'express';

import {
  createWorkout,
  getWorkoutById,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workout.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createWorkoutSchema } from '../validators/workout.validator.js';

export const workoutRouter = Router();

workoutRouter.get('/', getWorkouts);

workoutRouter.get('/:id', getWorkoutById);

workoutRouter.post('/', validate(createWorkoutSchema), createWorkout);

workoutRouter.put('/:id', validate(createWorkoutSchema), updateWorkout);

workoutRouter.delete('/:id', deleteWorkout);
