import { onLoginUser } from '@/actions/auth/onLoginUser'
import { ChatProvider } from '@/context/useChat'
import React from 'react'

const Layout = async () => {
    const authenticated = await onLoginUser()
    if (!authenticated) return null;
    return (
        <ChatProvider >
            <div className='flex h-screen w-full'>
                c
            </div>
        </ChatProvider>
    )
}

export default Layout