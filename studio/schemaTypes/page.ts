import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'object',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      description: 'Stable ID (e.g. m1.1-page-1). Matches the Supabase course catalog.',
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      initialValue: 'content',
      options: {
        list: [
          { title: 'Content', value: 'content' },
          { title: 'Video', value: 'video' },
          { title: 'Quiz', value: 'quiz' },
          { title: 'Interactive', value: 'interactive' },
        ],
        layout: 'radio',
      },
    }),
    // content
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      hidden: ({ parent }) => parent?.pageType !== 'content',
    }),
    // video
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({ parent }) => parent?.pageType !== 'video',
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube ID',
      type: 'string',
      hidden: ({ parent }) => parent?.pageType !== 'video',
    }),
    defineField({
      name: 'isWelcome',
      title: 'Is Welcome Video',
      type: 'boolean',
      hidden: ({ parent }) => parent?.pageType !== 'video',
    }),
    // quiz
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'quizQuestion' }],
      hidden: ({ parent }) => parent?.pageType !== 'quiz',
    }),
    // interactive
    defineField({
      name: 'componentId',
      title: 'Component ID',
      type: 'string',
      description: 'Identifier for the interactive demo (e.g. CexDexDemo, token-supply-simulator).',
      hidden: ({ parent }) => parent?.pageType !== 'interactive',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pageType' },
  },
});
