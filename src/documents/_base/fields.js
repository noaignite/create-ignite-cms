export default [
  {
    title: 'Title',
    name: 'title',
    type: 'string',
    group: 'general',
  },
  {
    name: 'uri',
    title: 'URI',
    type: 'slug',
    group: 'general',
    validation: (Rule) => Rule.required(),
    options: {
      source: 'title',
      // TODO: this should only return true if there is no other document in the base language with the same uri
      isUnique: () => true,
    },
  },
  {
    title: 'Test',
    name: 'test',
    type: 'responsiveMedia',
    group: 'general',
  },
  {
    title: 'SEO',
    name: 'seo',
    type: 'seo',
    group: 'seo',
  },
]
