import Joi from 'joi';
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

import { HandleEnquiryOptions } from './webhook.service';

export type WebhookEnquiryBody = HandleEnquiryOptions;

export interface WebhookEnquiryRequest extends ValidatedRequestSchema {
    [ContainerTypes.Body]: WebhookEnquiryBody;
}

export const WebhookEnquiryBodySchema = Joi.object<WebhookEnquiryBody>({
    enquiryId: Joi.string().required(),
});
