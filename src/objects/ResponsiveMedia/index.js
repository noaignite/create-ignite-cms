import ResponsiveMedia from './ResponsiveMedia'
import breakpoints from './breakpoints'

export default {
  title: 'Responsive Media',
  name: 'responsiveMedia',
  type: 'object',
  inputComponent: ResponsiveMedia,
  fields: [
    {
      name: 'component',
      type: 'string',
      initialValue: 'picture',
      options: {
        list: [
          { title: 'Picture', value: 'picture' },
          { title: 'Video', value: 'video' },
        ],
      },
    },
    {
      name: 'breakpoint',
      type: 'string',
      initialValue: 'xs',
      options: {
        list: breakpoints,
      },
    },
    ...breakpoints.map((breakpoint) => ({
      title: `Picture ${breakpoint.title}`,
      name: `picture_${breakpoint.value}`,
      type: 'image',
    })),
    ...breakpoints.map((breakpoint) => ({
      title: `Video ${breakpoint.title}`,
      name: `video_${breakpoint.value}`,
      type: 'file',
    })),
  ],
}
