'use client'

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "./use-toast"
import { UserRegistrationProps, UserRegistrationSchema } from "@/schema/auth.schema";
import { onCompleteUserRegistration } from "@/actions/auth";

export const useSignUpForm = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const { signUp, isLoaded, setActive } = useSignUp();
    const router = useRouter();
    const methods = useForm<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        defaultValues: {
            type: 'owner'
        },
        mode: 'onChange'
    });

    const onGenerateOtp = async (email: string, password: string, onNext: React.Dispatch<React.SetStateAction<number>>) => {
        if (!isLoaded) {
            toast({
                title: 'Error',
                description: 'SignUp process is not fully loaded yet.',
            });
            return;
        }

        if (!email || !password) {
            toast({
                title: 'Error',
                description: 'Please enter a valid email and password.',
            });
            return;
        }

        try {
            const signUpResponse = await signUp.create({
                emailAddress: email,
                password: password
            });

            const verificationResponse = await signUp.prepareEmailAddressVerification({
                strategy: 'email_code'
            });

            onNext((prev) => prev + 1);
        } catch (error: any) {
            console.error('Clerk API Error:', error);

            const errorMessage = error?.errors?.[0]?.description || 'An unexpected error occurred.';

            toast({
                title: 'Error',
                description: errorMessage
            });
        }
    };

    const onHandleSubmit = methods.handleSubmit(
        async (values: UserRegistrationProps) => {
            if (!isLoaded) return

            try {
                setLoading(true);
                const completeSignUp = await signUp.attemptEmailAddressVerification({
                    code: values.otp
                })

                if (completeSignUp.status !== 'complete') {
                    return {
                        message: 'Something went wrong'
                    }
                }

                if (completeSignUp.status === 'complete') {
                    if (!signUp.createdUserId) return;

                    const registerd = await onCompleteUserRegistration(
                        values.fullname,
                        signUp.createdUserId,
                        values.type
                    )

                    if (registerd?.status === 200 && registerd.user) {
                        await setActive({
                            session: completeSignUp.createdSessionId
                        })

                        setLoading(false);
                        router.push('/dashboard')
                    }

                    if (registerd?.status === 400) {
                        toast({
                            title: 'Error',
                            description: 'Something went wrong'
                        })
                    }
                }
            } catch (error: any) {
                toast({
                    title: 'Error',
                    description: error.errors[0].description
                })
            }
        }
    )

    return {
        methods,
        onHandleSubmit,
        onGenerateOtp,
        loading,
    }
}