import { FieldValues, UseFormRegister } from 'react-hook-form';

export type TypeSelectionFormProps = {
    register: UseFormRegister<FieldValues>;
    userType: 'owner' | 'student';
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
}