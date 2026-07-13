import { Router } from 'express';

import { createWorkout, getWorkouts } from '../controllers/workout.controller.js';

export const workoutRouter = Router();

workoutRouter.get('/', getWorkouts);

workoutRouter.post('/', createWorkout);
