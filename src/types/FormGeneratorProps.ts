
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export type FormGeneratorProps = {
    type: 'text' | 'email' | 'password'
    inputType: 'select' | 'input' | 'textarea'
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    register: UseFormRegister<any>
    name: string
    errors: FieldErrors<FieldValues>
    lines?: number
    form?: string
    defaultValue?: string
}