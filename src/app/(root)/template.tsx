import React, { ReactNode } from 'react'

const template = ({ children }: { children: ReactNode }) => {
    return (
        <div>{children}</div>
    )
}

export default template