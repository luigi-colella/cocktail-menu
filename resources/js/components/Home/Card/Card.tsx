import React, { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
  actionButton?: {
    text: string
    cb: () => void
  }
}

export default function Card(props: Props) {
  let { title, children, actionButton } = props
  return (
    <div className='card'>
      <div className='card-header'>
        {title}
        {actionButton ? (
          <a
            href='#'
            className='btn btn-warning btn-sm float-right border border-secondary'
            onClick={actionButton.cb}
          >
            {actionButton.text}
          </a>
        ) : null}
      </div>
      <div
        className='card-body'
        style={{ maxHeight: '75vh', overflow: 'auto' }}
      >
        {children}
      </div>
    </div>
  )
}
