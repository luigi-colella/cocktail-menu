import React, { Component } from 'react';

export default class CocktailList extends Component {
    render () {
        let { cocktails } = this.props

        return (
            <div>
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
        )
    }
}
