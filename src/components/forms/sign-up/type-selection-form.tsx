import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form';
import UserTypeCard from './user-type-card';

type Props = {
    register: UseFormRegister<FieldValues>;
    userType: 'owner' | 'student';
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
}

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {

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