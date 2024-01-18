import { AxiosInstance } from 'axios';

import { Enquiry } from './enquiry.type';

type GetEnquiryOptions = { enquiryId: string };

export const getEnquiry = async (client: AxiosInstance, { enquiryId }: GetEnquiryOptions) => {
    return await client
        .request<Enquiry>({ method: 'GET', url: `/enquiry/${enquiryId}` })
        .then((response) => response.data);
};
