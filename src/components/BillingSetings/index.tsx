import React from 'react'
import onGetSubscriptionPlan from '@/actions/settings/onGetSubscriptionPlan'
import SectionLabel from '../SectionLabel';

const BillingSetings = async () => {
    const plan = await onGetSubscriptionPlan();

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
            <div className='lg:col-span-1'>
                <SectionLabel
                    label='Billing setting'
                    message="Add payment information, upgrade and modify your plan"
                />
            </div>
        </div>
    )
}

export default BillingSetings