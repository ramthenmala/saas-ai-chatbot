import React from 'react'
import onGetSubscriptionPlan from '@/actions/settings/onGetSubscriptionPlan'
import SectionLabel from '../SectionLabel';
import { Card, CardContent, CardDescription } from '../ui/card';
import { CheckCircle2, Plus } from 'lucide-react';
import { pricingCards } from '@/constants/pricingCards';

const BillingSetings = async () => {
    const plan = await onGetSubscriptionPlan();
    const planFeatures = pricingCards.find(card => card.title.toUpperCase() === plan?.toUpperCase())?.features;

    if (!planFeatures) return;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
            <div className='lg:col-span-1'>
                <SectionLabel
                    label='Billing setting'
                    message="Add payment information, upgrade and modify your plan"
                />
            </div>
            <div className="lg:col-span-2 flex justify-start lg:justify-center ">
                <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
                    <CardContent className="flex gap-2 items-center">
                        <div className="rounded-full border-2 p-1">
                            <Plus className="text-gray-400" />
                        </div>
                        <CardDescription className="font-semibold">
                            Upgrade Plan
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
                <p className="text-sm font-semibold">{plan}</p>

                {planFeatures.map(feature => (
                    <div className='flex gap-2 py-1' key={feature}>
                        <CheckCircle2 />
                        <p className='text-muted-foreground'>{ feature}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BillingSetings