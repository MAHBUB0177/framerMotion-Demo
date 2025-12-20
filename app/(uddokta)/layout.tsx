import UddoktaNavbar from '@/components/layout2/uddoktaNavbar'
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <UddoktaNavbar/>
        {children}
    </>
   
        
     
  )
}

export default layout