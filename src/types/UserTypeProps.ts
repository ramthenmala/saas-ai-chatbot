import { FieldValues, UseFormRegister } from 'react-hook-form'

export type UserTypeProps = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student';
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
}