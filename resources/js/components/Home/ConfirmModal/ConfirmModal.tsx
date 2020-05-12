import React from 'react'

interface Props {
    modalId: string
    title: string
    text: string
    onStartNewOrder: () => void
}

export default function ConfirmModal (props: Props) {
    return (
        <div id={props.modalId} className="modal fade" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header border-bottom-0">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h4 className="text-center mb-4">{props.text}</h4>
                    <img src="./img/cheers.gif" className="mx-auto d-block rounded-lg"></img>
                </div>
                <div className="modal-footer border-top-0">
                    <button type="button" className="btn btn-success" onClick={props.onStartNewOrder} data-dismiss="modal">NEW ORDER</button>
                </div>
                </div>
            </div>
        </div>
    )
}
