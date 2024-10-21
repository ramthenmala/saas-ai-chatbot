import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export type UploadButtonProps = {
    register: UseFormRegister<any>
    errors: FieldErrors<FieldValues>
    label: string
}