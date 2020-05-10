import React from 'react'

export default function Card (props) {
    return (
        <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body" style={{ maxHeight: '75vh', overflow: 'auto' }}>{props.children}</div>
        </div>
    )
}
