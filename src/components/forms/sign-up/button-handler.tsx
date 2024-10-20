'use client'

import { Button } from '@/components/ui/button';
import { useAuthContextHook } from '@/context/useAuthContext';
import { useSignUpForm } from '@/hooks/use-sign-up';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const ButtonHandler = () => {
    const { setCurrentStep, currentStep } = useAuthContextHook();
    const { formState, getValues } = useFormContext();
    const { onGenerateOtp } = useSignUpForm();

    const { isValid } = formState; 

    
    const fullname = getValues('fullname');
    const email = getValues('email');
    const password = getValues('password');

    console.log('currentStep', currentStep);
    console.log('fullname:', fullname, 'email:', email, 'password:', password); 

    
    if (currentStep === 3) {
        return (
            <div className='w-full flex flex-col gap-3 items-center'>
                <Button type='submit' className='w-full'>
                    Create Account
                </Button>
                <p>Already have an account?{' '}
                    <Link href='/auth/sign-in' className='font-bold'>
                        Sign In
                    </Link>
                </p>
            </div>
        );
    }

    if (currentStep === 2) {
        return (
            <div className='w-full flex flex-col gap-3 items-center'>
                <Button
                    type='button' 
                    className='w-full'
                    onClick={() => {
                        if (fullname && email && password) { 
                            onGenerateOtp(
                                email,
                                password,
                                setCurrentStep
                            );
                        }
                    }}
                    disabled={!fullname || !email || !password} 
                >
                    Continue
                </Button>
                {email && <p>Email field is filled</p>}
                <p>Already have an account?{' '}
                    <Link href='/auth/sign-in' className='font-bold'>
                        Sign In
                    </Link>
                </p>
            </div>
        );
    }

    
    return (
        <div className='w-full flex flex-col gap-3 items-center'>
            <Button
                type='button' 
                className='w-full'
                onClick={() => setCurrentStep((prev: number) => prev + 1)}
            >
                Continue
            </Button>
            <p>Already have an account?{' '}
                <Link href='/auth/sign-in' className='font-bold'>
                    Sign In
                </Link>
            </p>
        </div>
    );
}

export default ButtonHandler;
