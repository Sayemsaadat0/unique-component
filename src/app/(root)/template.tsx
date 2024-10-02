import Sidebar from '@/components/core/sidebar/Sidebar'
import React, { ReactNode } from 'react'

const template = ({ children }: { children: ReactNode }) => {
    return (
        <div className='grid grid-cols-10 w-full'>
            <div className='min-h-screen bg-black/50 backdrop-blur-sm fixed w-[180px]'>
                <Sidebar />
            </div>
            <div className='ml-[180px] col-span-8 w-full'>
                {children}
            </div>
        </div>
    )
}

export default template