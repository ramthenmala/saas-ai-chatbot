import React from 'react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

type OtpProps = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: OtpProps) => {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
            <p className="text-iridium md:text-sm">
                Enter the one time password that was sent to your email.
            </p>
            <div className="w-full justify-center flex py-5">
                
            </div>
        </>
    )
}

export default OTPForm