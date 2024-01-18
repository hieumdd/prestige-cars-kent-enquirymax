import { handleEnquiry } from './webhook.service';

it('handleCreateEnquiry', async () => {
    const enquiryId = '00165a36-8ae1-4792-ac53-06db3db581e6';
    return await handleEnquiry({ enquiryId })
        .then(({ enquiry, file }) => {
            expect(enquiry.enquiryId).toBe(enquiryId);
            expect(file).toBe(`${enquiryId}.json`);
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
});
