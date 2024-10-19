import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "./use-toast"
import { UserRegistrationProps, UserRegistrationSchema } from "@/schema/auth.schema";

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



}