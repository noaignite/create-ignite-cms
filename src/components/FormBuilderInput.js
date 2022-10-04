import * as React from 'react'
import PropTypes from 'prop-types'
import { FormBuilderInput as SanityFormBuilderInput } from '@sanity/form-builder/lib/FormBuilderInput'
import { setIfMissing } from '@sanity/form-builder/PatchEvent'

const FormBuilderInput = React.forwardRef((props, ref) => {
  const {
    compareValue,
    field,
    focusPath,
    markers,
    onBlur,
    onChange,
    onFocus,
    presence,
    type,
    value,
  } = props

  const handleFieldChange = React.useCallback(
    (patchEvent) => {
      onChange(patchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })))
    },
    [field.name, type.name, onChange],
  )

  return (
    <SanityFormBuilderInput
      ref={ref}
      key={field.name}
      type={field.type}
      value={value && value[field.name]}
      onChange={handleFieldChange}
      path={[field.name]}
      readOnly={field.type.readOnly}
      markers={markers}
      focusPath={focusPath}
      presence={presence}
      onFocus={onFocus}
      onBlur={onBlur}
      compareValue={compareValue}
    />
  )
})

FormBuilderInput.propTypes = {
  compareValue: PropTypes.object,
  field: PropTypes.object.isRequired,
  focusPath: PropTypes.array,
  markers: PropTypes.array,
  // level: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  presence: PropTypes.array,
  type: PropTypes.object,
  value: PropTypes.object,
}

export default FormBuilderInput
