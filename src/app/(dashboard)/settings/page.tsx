import React from 'react';
import InfoBar from '@/components/InfoBar';
import BillingSetings from '@/components/BillingSetings';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import ChangePassword from '@/components/ChangePassword/ChangePassword';

const Page = () => {
  return (
    <>
      <InfoBar />
      <BillingSetings />
      <DarkModeToggle />
      <ChangePassword />
    </>
  )
}

export default Page