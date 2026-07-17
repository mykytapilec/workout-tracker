import { RequestHandler } from 'express';

import { createExerciseSchema, updateExerciseSchema } from '../schemas/exercise.schema.js';
import { exerciseService } from '../services/exercise.service.js';

export const getExercisesByWorkoutId: RequestHandler = async (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId || Array.isArray(workoutId)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const exercises = await exerciseService.getAllByWorkoutId(workoutId);

  res.status(200).json(exercises);
};

export const createExercise: RequestHandler = async (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId || Array.isArray(workoutId)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid workout id',
    });

    return;
  }

  const data = createExerciseSchema.parse(req.body);

  const exercise = await exerciseService.create(workoutId, data);

  res.status(201).json(exercise);
};

export const getExerciseById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid exercise id',
    });

    return;
  }

  const exercise = await exerciseService.getById(id);

  if (!exercise) {
    res.status(404).json({
      status: 'error',
      message: 'Exercise not found',
    });

    return;
  }

  res.status(200).json(exercise);
};

export const updateExercise: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid exercise id',
    });

    return;
  }

  const data = updateExerciseSchema.parse(req.body);

  const exercise = await exerciseService.update(id, data);

  if (!exercise) {
    res.status(404).json({
      status: 'error',
      message: 'Exercise not found',
    });

    return;
  }

  res.status(200).json(exercise);
};

export const deleteExercise: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    res.status(400).json({
      status: 'error',
      message: 'Invalid exercise id',
    });

    return;
  }

  const deleted = await exerciseService.delete(id);

  if (!deleted) {
    res.status(404).json({
      status: 'error',
      message: 'Exercise not found',
    });

    return;
  }

  res.status(200).json({
    message: 'Exercise deleted successfully',
  });
};
