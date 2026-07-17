import { Prisma } from '../generated/prisma/client.js';
import { ZodError } from 'zod';

import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.error(error);

  if (error instanceof ZodError) {
    res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: error.issues,
    });

    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2025') {
      res.status(404).json({
        status: 'error',
        message: 'Resource not found',
      });

      return;
    }

    if (error.code === 'P2002') {
      res.status(409).json({
        status: 'error',
        message: 'Duplicate resource',
      });

      return;
    }
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
