import { RequestHandler } from 'express';

import { workoutService } from '../services/workout.service.js';

export const getWorkouts: RequestHandler = async (_req, res) => {
  const workouts = await workoutService.getAll();

  res.status(200).json(workouts);
};

export const createWorkout: RequestHandler = async (req, res) => {
  const workout = await workoutService.create(req.body);

  res.status(201).json(workout);
};

export const getWorkoutById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const workout = await workoutService.getById(id);

  if (!workout) {
    res.status(404).json({
      status: 'error',
      message: 'Workout not found',
    });

    return;
  }

  res.status(200).json(workout);
};

export const updateWorkout: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const workout = await workoutService.update(id, req.body);

  if (!workout) {
    res.status(404).json({
      status: 'error',
      message: 'Workout not found',
    });

    return;
  }

  res.status(200).json(workout);
};

export const deleteWorkout: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const deleted = await workoutService.delete(id);

  if (!deleted) {
    res.status(404).json({
      status: 'error',
      message: 'Workout not found',
    });

    return;
  }

  res.status(200).json({
    message: 'Workout deleted successfully',
  });
};
