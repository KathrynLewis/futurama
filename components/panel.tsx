import * as React from 'react'

export interface PanelProps {
  children: React.ReactNode
}

export function Panel({ children }: PanelProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow h-[656px] w-[1080px] mx-auto'>
        {children}
    </div>
  )
}
