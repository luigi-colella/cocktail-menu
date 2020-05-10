import React, { Component } from 'react';

export default class CocktailList extends Component {
    render () {
        let { selectedIngredient, cocktails } = this.props

        return (
            <div className="card">
                <div className="card-header">{'Suggested drinks for: ' + selectedIngredient}</div>
                <div className="card-body" style={{ maxHeight: '75vh', overflow: 'auto' }}>
                    {cocktails && cocktails.length ?
                        <table className="table table-hover">
                            <tbody>
                                {cocktails.map(name => {
                                    return (
                                        <tr key={name}>
                                            <td>{name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        :
                        'No suggested drinks 🍻'
                    }
                </div>
            </div>
        )
    }
}
