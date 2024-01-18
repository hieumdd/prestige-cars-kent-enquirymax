import { Router } from 'express';
import { ValidatedRequest } from 'express-joi-validation';

import { validator } from '../validator.middleware';
import { WebhookEnquiryRequest, WebhookEnquiryBodySchema } from './webhook.request.dto';
import { handleEnquiry } from './webhook.service';

export const WebhookRouter = Router();

WebhookRouter.use(
    '/',
    validator.body(WebhookEnquiryBodySchema),
    ({ body }: ValidatedRequest<WebhookEnquiryRequest>, res, next) => {
        handleEnquiry(body)
            .then((result) => res.status(200).json({ result }))
            .catch(next);
    },
);
