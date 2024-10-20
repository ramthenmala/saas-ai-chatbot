import React from 'react'
import { userRegistrationForm } from '@/constants/forms'
import { AccountDetailsFormProps } from '@/types/AccountDetailsFormProps'
import FormGenerator from '../FormGenerator'

function AccountDetailsForm({ errors, register }: AccountDetailsFormProps) {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Account details</h2>
            <p className="text-iridium md:text-sm">Enter your email and password</p>
            {userRegistrationForm.map((field) => (
                <FormGenerator
                    key={field.id}
                    {...field}
                    errors={errors}
                    register={register}
                    name={field.name}
                />
            ))}
        </>
    )
}

export default AccountDetailsForm