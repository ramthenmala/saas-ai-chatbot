'use client';

import { useThemeMode } from '@/hooks/use-settings';
import React from 'react'
import SectionLabel from '../SectionLabel';
import { cn } from '@/app/lib/utils';
import { ModeSystem } from '../ThemesPlaceholder/ModeSystem';
import { ModeDark } from '../ThemesPlaceholder/ModeDark';
import { ModeLight } from '../ThemesPlaceholder/ModeLight';

const DarkModeToggle = () => {

    const { setTheme, theme } = useThemeMode()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
            <div className='lg:col-span-1'>
                <SectionLabel
                    label='Interface Theme'
                    message='Select or customize your UI theme'
                />
            </div>

            <div className='lg:col-span-4 flex lg:flex-row flex-col items-start gap-5'>
                <div className={cn(
                    'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
                    theme === 'system' && 'border-orange'
                )}
                    onClick={() => setTheme('system')}
                >
                    <ModeSystem />
                </div>

                <div className={cn(
                    'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
                    theme === 'light' && 'border-orange'
                )}
                    onClick={() => setTheme('light')}
                >
                    <ModeLight />
                </div>

                <div className={cn(
                    'rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent',
                    theme === 'dark' && 'border-orange'
                )}
                    onClick={() => setTheme('dark')}
                >
                    <ModeDark />
                </div>
            </div>
        </div>
    )
}

export default DarkModeToggle