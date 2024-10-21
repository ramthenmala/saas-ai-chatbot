import React from 'react';
import { Spinner } from '../Spinner';
import { cn } from '@/app/lib/utils';

export type LoaderProps = {
    loading: boolean,
    children: React.ReactNode;
    className: string;
    noPadding: boolean;
}

export const Loader = ({ loading, children, className, noPadding }: LoaderProps) => {
    return loading ? (
        <div className={cn(className || 'w-full py-5 flex justify-center')}>
            <Spinner noPadding={noPadding} />
        </div>
    ) : (children)
}