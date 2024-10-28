import { ChangePasswordProps, ChangePasswordSchema } from "@/schema/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "./use-toast"
import { useState } from "react"
import { onUpdatePassword } from "@/actions/settings/onUpdatedPassword"

export const useChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ChangePasswordProps>({
        resolver: zodResolver(ChangePasswordSchema),
        mode: 'onChange',
    })
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)

    const onChangePassword = handleSubmit(async (values) => {
        try {
            setLoading(true)
            const updated = await onUpdatePassword(values.password)
            if (updated) {
                reset()
                setLoading(false)
                toast({ title: 'Success', description: updated.message })
            }
        } catch (error) {
            console.log(error)
        }
    })
    return {
        register,
        errors,
        onChangePassword,
        loading,
    }
}