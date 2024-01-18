import { getClient } from './auth.service';
import { getEnquiry } from './enquiry.service';

it('getEnquiry', async () => {
    const client = await getClient();
    const enquiryId = '00165a36-8ae1-4792-ac53-06db3db581e6';
    return getEnquiry(client, { enquiryId })
        .then((enquiry) => expect(enquiry.enquiryId).toBe(enquiryId))
        .catch((error) => {
            console.error(error);
            throw error;
        });
});
