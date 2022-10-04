import * as React from 'react'
import PropTypes from 'prop-types'
import classes from './ResponsiveMedia.module.css'
import { FormBuilderInput } from '../../components'

const ResponsiveMedia = React.forwardRef((props, ref) => {
  const { type, value } = props

  const fields = type.type.fields

  const componentField = React.useMemo(() => {
    return fields.find((f) => f.name === 'component')
  }, [fields])

  const breakpointField = React.useMemo(() => {
    return fields.find((f) => f.name === 'breakpoint')
  }, [fields])

  const mediaField = React.useMemo(() => {
    return fields.find((field) => field.name === `${value['component']}_${value['breakpoint']}`)
  }, [value, fields])

  return (
    <div ref={ref}>
      <div className={classes.gridRow}>
        <FormBuilderInput field={componentField} {...props} />
        <FormBuilderInput field={breakpointField} {...props} />
      </div>

      <br />

      {mediaField && <FormBuilderInput field={mediaField} {...props} />}
    </div>
  )
})

ResponsiveMedia.propTypes = {
  type: PropTypes.object,
  value: PropTypes.object,
}

export default ResponsiveMedia
