import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export type AccountDetailsFormProps = {
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}
