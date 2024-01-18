import { Storage } from '@google-cloud/storage';

const client = new Storage();
const bucket = client.bucket('prestige-cars-kent-enquirymax');

type CreateFileOptions = { fileName: string; data: any };

export const saveFile = async ({ fileName, data }: CreateFileOptions) => {
    const file = bucket.file(fileName);
    await file.save(data);
    return file;
};
