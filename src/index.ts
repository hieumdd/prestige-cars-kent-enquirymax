import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Joi from 'joi';

import { logger } from './logging.service';
import { WebhookRouter } from './webhook/webhook.controller';

const app = express();

app.use(bodyParser.json());

app.use(({ method, path, body }, res, next) => {
    logger.info({ method, path, body });
    res.on('finish', () => {
        logger.debug({ method, path, body, status: res.statusCode });
    });
    next();
});

app.use('/webhook', WebhookRouter);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (Joi.isError(error.error)) {
        logger.warn({ error: error.error });
        res.status(400).json({ error: error.error });
        return;
    }
    logger.error({ error });
    res.status(500).json({ error });
});

const server = app.listen(8080);

['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, () => {
        server.close(() => {
            process.exit(0);
        });
    });
});
