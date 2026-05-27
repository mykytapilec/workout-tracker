import 'dotenv/config';

const getEnvVariable = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: getEnvVariable('NODE_ENV'),
};
