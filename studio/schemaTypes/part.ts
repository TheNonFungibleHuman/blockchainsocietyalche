import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'part',
  title: 'Part',
  type: 'object',
  fields: [
    defineField({
      name: 'partId',
      title: 'Part ID',
      type: 'string',
      description: 'Stable ID (e.g. part-1). Matches the Supabase course catalog.',
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'module' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'partId' },
  },
});
