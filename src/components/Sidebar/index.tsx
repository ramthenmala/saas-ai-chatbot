'use client';

import React from 'react'
import { cn } from '@/app/lib/utils';

import MaxMenu from './MaximisedMenu';
import { MinMenu } from './MinimizedMenu';
import useSideBar from '@/hooks/use-sidebar';

type SidebarProps = {
    domains: | {
        id: string;
        name: string;
        icons: string
    }[]
    | null
    | undefined
}

const Sidebar = ({ domains }: SidebarProps) => {
    
    const { expand, onExpand, page, onSignOut } = useSideBar();

    return (
        <div
        className={cn(
            'bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative',
            expand == undefined && '',
            expand == true
                ? 'animate-open-sidebar'
                : expand == false && 'animate-close-sidebar'
        )}
        >
            {expand ? (
                <MaxMenu
                    domains={domains}
                    current={page!}
                    onExpand={onExpand}
                    onSignOut={onSignOut}
                />
            ) : (
                <MinMenu
                    domains={domains}
                    onShrink={onExpand}
                    current={page!}
                    onSignOut={onSignOut}
                />
            )}
        </div>
    )
}

export default Sidebar