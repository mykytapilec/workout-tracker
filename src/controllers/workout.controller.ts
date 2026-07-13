import { RequestHandler } from 'express';

import { workoutService } from '../services/workout.service.js';

export const getWorkouts: RequestHandler = (_req, res) => {
  const workouts = workoutService.getAll();

  res.status(200).json(workouts);
};

export const createWorkout: RequestHandler = (req, res) => {
  const workout = workoutService.create(req.body);

  res.status(201).json(workout);
};
