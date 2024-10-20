'use client'
import { Loader } from '@/components/Loader'
import { AuthContextProvider } from '@/context/useAuthContext'
import { useSignInForm } from '@/hooks/use-sign-in'
import { ReactChildrenProps } from '@/types/Children'
import React from 'react'
import { FormProvider } from 'react-hook-form'

const SignInFormProvider = ({ children }: ReactChildrenProps) => {
    const { methods, onHandleSubmit, loading } = useSignInForm()

    return (
        <AuthContextProvider>
            <FormProvider {...methods}>
                <form
                    onSubmit={onHandleSubmit}
                    className="h-full"
                >
                    <div className="flex flex-col justify-between gap-3 h-full">
                        <Loader loading={loading}>{children}</Loader>
                    </div>
                </form>
            </FormProvider>
        </AuthContextProvider>
    )
}

export default SignInFormProvider