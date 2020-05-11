import React, { Component } from 'react';

export default class CocktailList extends Component {
    render () {
        let { cocktails, onSelectCocktail } = this.props

        return (
            <div>
                {cocktails && cocktails.length ?
                    <ul className="list-unstyled">
                        {cocktails.map(cocktail => {
                            return (
                                <li className="media align-items-center mb-3 pointer-on-hover" key={cocktail.name} onClick={() => { onSelectCocktail(cocktail) }}>
                                    <img src={cocktail.thumbnailUrl} className="mr-3 w-25 border border-dark" style={{width: '20%'}} alt={cocktail.name} />
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
