export default {
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
