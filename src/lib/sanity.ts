import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'vaiyu1ge';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';
const readToken = import.meta.env.VITE_SANITY_READ_TOKEN;

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: true });

// Read-only viewer token, used by LiveQueryProvider for live draft preview.
export const sanityReadToken = readToken;
