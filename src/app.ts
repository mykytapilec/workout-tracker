import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { errorMiddleware } from './middlewares/error.middleware.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { router } from './routes/index.js';

const swaggerDocument = YAML.load('./src/docs/openapi.yaml');

export const app = express();

app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', router);

app.use(notFoundMiddleware);

app.use(errorMiddleware);
