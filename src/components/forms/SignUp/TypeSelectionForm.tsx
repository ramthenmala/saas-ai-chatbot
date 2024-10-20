import React from 'react'
import UserTypeCard from './UserTypeCard';
import { TypeSelectionFormProps } from '@/types/TypeSelectionFormProps';

const TypeSelectionForm = ({ register, userType, setUserType }: TypeSelectionFormProps) => {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Create an account</h2>
            <p className="text-iridium md:text-sm">
                Tell us about yourself! What do you do? Let’s tailor your
                <br /> experience so it best suits you.
            </p>

            <UserTypeCard
                value='owner'
                title='I own a business'
                text='Setting up my account for my company'
                register={register}
                userType={userType}
                setUserType={setUserType}
            />

            <UserTypeCard
                value='Student'
                title='I am a Student'
                text='Looking to learn about the tool'
                register={register}
                userType={userType}
                setUserType={setUserType}
            />
        </>
    )
}

export default TypeSelectionForm