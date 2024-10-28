import { onGetCurrentDomainInfo } from '@/actions/settings/onGetCurrentDomainInfo'
import InfoBar from '@/components/InfoBar';
import { DomainSettingsProps } from '@/types/DomainSettingsProps'
import { redirect } from 'next/navigation';
import React from 'react'

const DomainSettingsPage = async ({ params }: DomainSettingsProps) => {
    const domain = await onGetCurrentDomainInfo(params.domain);
    if (!domain) redirect('./dashboard')
    return (
        <>
            <InfoBar />
        </>
    )
}

export default DomainSettingsPage