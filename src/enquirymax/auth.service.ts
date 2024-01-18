import axios from 'axios';

import { DealerId } from './dealer.const';

export const getClient = async () => {
    const { access_token: token } = await axios
        .request<{ access_token: string }>({
            method: 'POST',
            url: 'https://api.enquirymax.net/services/oauth',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                grant_type: 'client_credentials',
                client_id: process.env.ENQUIRYMAX_CLIENT_ID,
                client_secret: process.env.ENQUIRYMAX_CLIENT_SECRET,
            },
        })
        .then((response) => response.data);

    return axios.create({
        baseURL: `https://api.enquirymax.net/services/v1/${DealerId}`,
        headers: { Authorization: `Bearer ${token}` },
    });
};
