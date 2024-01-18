import { getClient } from '../enquirymax/auth.service';
import { getEnquiry } from '../enquirymax/enquiry.service';
import { saveFile } from '../storage.service';

export type HandleEnquiryOptions = { enquiryId: string };

export const handleEnquiry = async ({ enquiryId }: HandleEnquiryOptions) => {
    const client = await getClient();
    const enquiry = await getEnquiry(client, { enquiryId });
    const file = await saveFile({
        fileName: `enquiry/${enquiry.enquiryId}.json`,
        data: JSON.stringify(enquiry),
    });
    return { enquiry, file: file.name };
};
