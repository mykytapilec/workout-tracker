import { Router } from 'express';

import {
  createExercise,
  deleteExercise,
  getExerciseById,
  getExercisesByWorkoutId,
  updateExercise,
} from '../controllers/exercise.controller.js';

const router = Router();

router.get('/workouts/:workoutId/exercises', getExercisesByWorkoutId);

router.post('/workouts/:workoutId/exercises', createExercise);

router.get('/exercises/:id', getExerciseById);

router.put('/exercises/:id', updateExercise);

router.delete('/exercises/:id', deleteExercise);

export default router;
