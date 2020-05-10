import React, { Component } from 'react';

export default class IngredientList extends Component {
    render () {
        let { ingredientNames, selectedIngredient, onSelectIngredient } = this.props

        return (
            <div className="card">
                <div className="card-header">{selectedIngredient ? 'You selected: ' + selectedIngredient : 'Choose an ingredient!'}</div>
                <div className="card-body" style={{ maxHeight: '75vh', overflow: 'auto' }}>
                    {ingredientNames && ingredientNames.length ? 
                        <table className="table table-hover">
                            <tbody>
                                {ingredientNames.map(name => {
                                    let className = selectedIngredient === name ? 'bg-success text-white' : ''
                                    return (
                                        <tr key={name} onClick={() => { onSelectIngredient(name) }}>
                                            <td className={'pointer-on-hover ' + className}>{name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        :
                        'No available ingredient at the moment :('
                    }
                </div>
            </div>
        )
    }
}
