import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'quizQuestion',
  title: 'Quiz Question',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Question ID',
      type: 'string',
      description: 'Stable unique ID within this quiz (e.g. q1, q2).',
    }),
    defineField({ name: 'question', title: 'Question', type: 'text' }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'correctAnswer',
      title: 'Correct Answer (index)',
      type: 'number',
      description: 'Zero-based index of the correct option (0 = first option).',
    }),
    defineField({
      name: 'hintPageId',
      title: 'Hint Page ID',
      type: 'string',
      description: 'The pageId to review when the learner answers incorrectly.',
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'id' },
  },
});
