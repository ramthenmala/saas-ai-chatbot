import React from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const InfoBar = () => {
    return (
        <div className='flex w-full justify-between items-center py-1 mb-8'>
            <Breadcrumbs />

            <div className='flex gap-3 items-center'>

                <div>
                    <Card className='rounded-xl flex gap-3 py-3 px-4 text-ghost'>
                        <Trash />
                        <Star />
                    </Card>
                </div>

                <Avatar >
                    <AvatarFallback className='bg-orange text-white'>
                        <Headphones />
                    </AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback color='text-gray-500'>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default InfoBar