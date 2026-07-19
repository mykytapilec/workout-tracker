import { Router } from 'express';

import { workoutRouter } from './workout.routes.js';
import exerciseRoutes from './exercise.routes.js';

export const router = Router();

router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

router.use('/workouts', workoutRouter);
router.use(exerciseRoutes);
