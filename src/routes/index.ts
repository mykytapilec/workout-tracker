import { Router } from 'express';

export const router = Router();

router.get('/health', (_, res) => {
  res.status(200).json({
    status: 'ok',
  });
});
