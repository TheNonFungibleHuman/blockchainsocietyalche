import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'courseId', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'courseId',
      title: 'Course ID',
      type: 'string',
      description: 'Stable ID matching the Supabase course catalog (e.g. blockchain-101).',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'page' }],
      description: 'Welcome/intro pages shown before the course parts.',
    }),
    defineField({
      name: 'parts',
      title: 'Parts',
      type: 'array',
      of: [{ type: 'part' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'courseId' },
  },
});
