'use client';

import { useAuthContextHook } from '@/context/useAuthContext'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {

    const { register, formState: { errors }, setValue } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOtp, setOnOtp] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner');

    setValue('otp', onOtp);

    switch (currentStep) {
        case 1:
            return (
                <TypeSelectionForm
                    register={register}
                    userType={onUserType}
                    setUserType={setOnUserType}
                />
            )
        default:
            break;
    }

    return (
        <div>RegistrationFormStep</div>
    )
}

export default RegistrationFormStep