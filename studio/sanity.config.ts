import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from '@sanity/presentation';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'vaiyu1ge';
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';

export default defineConfig({
  name: 'default',
  title: 'Blocknauts CMS',
  projectId,
  dataset: 'production',
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: `${previewOrigin}/learn/course/{slug}?preview=true`,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
