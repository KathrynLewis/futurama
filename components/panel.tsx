import * as React from 'react'

export interface PanelProps {
  children: React.ReactNode
}

export function Panel({ children }: PanelProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow'>
      <div className='px-4 py-5'>
        <h1>panel</h1>
        {children}
      </div>
    </div>
  )
}
