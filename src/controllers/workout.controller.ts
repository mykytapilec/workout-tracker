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

export const getWorkoutById: RequestHandler = (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const workout = workoutService.getById(id);

  if (!workout) {
    res.status(404).json({
      status: 'error',
      message: 'Workout not found',
    });

    return;
  }

  res.status(200).json(workout);
};
