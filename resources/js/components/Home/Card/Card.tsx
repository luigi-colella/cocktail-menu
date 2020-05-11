import React, { ReactNode } from 'react'

interface Props {
    title: string,
    children: ReactNode
}

export default function Card (props: Props) {
    return (
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body" style={{ maxHeight: '75vh', overflow: 'auto' }}>{props.children}</div>
        </div>
    )
}
