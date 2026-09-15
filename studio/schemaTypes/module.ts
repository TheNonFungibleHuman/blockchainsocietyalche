import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  fields: [
    defineField({
      name: 'moduleId',
      title: 'Module ID',
      type: 'string',
      description: 'Stable ID (e.g. module-1.1). Matches the Supabase course catalog.',
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{ type: 'page' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'moduleId' },
  },
});
