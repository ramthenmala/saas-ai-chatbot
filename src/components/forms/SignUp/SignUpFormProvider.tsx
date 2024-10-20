'use client'

import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Loader } from '@/components/Loader'
import { AuthContextProvider } from '@/context/useAuthContext'
import { useSignUpForm } from '@/hooks/use-sign-up'
import { ReactChildrenProps } from '@/types/Children'

const SignUpFormProvider = ({ children }: ReactChildrenProps) => {
    const { methods, onHandleSubmit, loading } = useSignUpForm()

    return (
        <AuthContextProvider>
            <FormProvider {...methods}>
                <form onSubmit={onHandleSubmit} className='h-full'>
                    <div className='flex flex-col justify-between gap-3 h-full'>
                        <Loader loading={loading}>{children}</Loader>
                    </div>
                </form>
            </FormProvider>
        </AuthContextProvider>
    )
}

export default SignUpFormProvider