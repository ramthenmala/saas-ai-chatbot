import { onLoginUser } from '@/actions/auth/onLoginUser'
import Sidebar from '@/components/Sidebar'
import { ChatProvider } from '@/context/useChat'
import React from 'react'

const Layout = async ({ children}) => {
    const authenticated = await onLoginUser()
    if (!authenticated) return null;
    return (
        <ChatProvider >
            <div className='flex h-screen w-full'>
                <Sidebar
                    domains={authenticated.domain} />
                <div className='w-full h-screen flex flex-col py-3 pr-10 pl-20'>
                    {children}
                </div>
            </div>
        </ChatProvider>
    )
}

export default Layout