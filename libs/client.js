import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'training',
  apiKey: process.env.API_KEY,
});
