import React from 'react';
import InfoBar from '@/components/InfoBar';
import BillingSetings from '@/components/BillingSetings';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';

const Page = () => {
  return (
    <>
      <InfoBar />
      <BillingSetings />
      <DarkModeToggle />
    </>
  )
}

export default Page