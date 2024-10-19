'use client';

import { useAuthContextHook } from '@/context/useAuthContext'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'
import dynamic from 'next/dynamic';
import AccountDetailsForm from './account-details-form';

const DynamicDetailForm = dynamic(() => import('./account-details-form'), {
    ssr: false,
})

const DynamicOtpForm = dynamic(() => import('./otp-form'), {
    ssr: false,
})

const RegistrationFormStep = () => {

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
        case 2:
            return (
                <DynamicDetailForm
                    errors={errors}
                    register={register}
                />
            )
        default:
            return (
                <DynamicOtpForm
                    onOTP={onOtp}
                    setOTP={setOnOtp}
                />
            )
            break;
    }

    return (
        <div>RegistrationFormStep</div>
    )
}

export default RegistrationFormStep