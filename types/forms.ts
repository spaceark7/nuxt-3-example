import * as yup from 'yup'

export interface FieldProps {
  name: string
  label: string
  class?: string
  as:
    | 'text'
    | 'email'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'textarea'
  rules?: yup.AnyObject
}

const a = yup.string().email().required()

export interface FormSchemaProps {
  fields: FieldProps[]
  containerClass?: string
}
