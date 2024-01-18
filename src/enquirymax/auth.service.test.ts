import { getClient } from './auth.service';

it('getClient', async () => {
    return await getClient()
        .then((client) => expect(client).toBeDefined())
        .catch((error) => {
            console.error(error);
            throw error;
        });
});
