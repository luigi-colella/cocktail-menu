import React, { Component } from 'react';

export default class CocktailList extends Component {
    render () {
        let { cocktails } = this.props

        return (
            <div>
                {cocktails && cocktails.length ?
                    <ul className="list-unstyled">
                        {cocktails.map(cocktail => {
                            return (
                                <li className="media align-items-center mt-3">
                                    <img src={cocktail.thumbnailUrl} className="mr-3 w-25" style={{width: '20%'}} alt={cocktail.name} />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">{cocktail.name}</h5>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    'No suggested drinks 🍻'
                }
            </div>
        )
    }
}
