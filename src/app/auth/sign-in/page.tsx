import React from 'react'
import Link from 'next/link'
import SignInFormProvider from '@/components/Forms/SignIn/SignInFormProvider'
import LoginForm from '@/components/Forms/SignIn/LoginForm'
import { Button } from '@/components/ui/button'

const SignInPage = () => {
    return (
        <div className="flex-1 py-36 md:px-16 w-full">
            <div className="flex flex-col h-full gap-3">
                <SignInFormProvider>
                    <div className="flex flex-col gap-3">
                        <LoginForm />
                        <div className="w-full flex flex-col gap-3 items-center">
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Submit
                            </Button>
                            <p>
                                Don’t have an account?{' '}
                                <Link
                                    href="/auth/signup"
                                    className="font-bold"
                                >
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </div>
                </SignInFormProvider>
            </div>
        </div>
    )
}

export default SignInPage