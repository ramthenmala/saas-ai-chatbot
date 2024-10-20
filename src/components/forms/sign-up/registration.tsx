'use client'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import TypeSelectionForm from './type-selection-form'
import dynamic from 'next/dynamic'
import { useAuthContextHook } from '@/context/useAuthContext'

const DetailForm = dynamic(() => import('./account-details-form'), {
    ssr: false,
})

const OTPForm = dynamic(() => import('./otp-form'), {
    ssr: false,
})

const RegistrationFormStep = () => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp', onOTP)

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
                <DetailForm
                    errors={errors}
                    register={register}
                />
            )
        case 3:
            return (
                <OTPForm
                    onOTP={onOTP}
                    setOTP={setOnOTP}
                />
            )
            break;
    }

    return <div>RegistrationFormStep</div>
}

export default RegistrationFormStep