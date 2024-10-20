import React from 'react'

type SectionLabelProps = {
    label: string;
    message: string;
}

const SectionLabel = ({ label, message }: SectionLabelProps) => {
    return (
        <div>
            <p className='text-sm font-medium'>{label}</p>
            <p className='text-sm font-light'>{message}</p>
        </div>
    )
}

export default SectionLabel