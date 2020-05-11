import { countBy, keyBy, values } from 'lodash'
import React, { Component } from 'react';

export default class CocktailOrder extends Component {
    render () {
        let { cocktails } = this.props
        let cocktailsCount = countBy(cocktails, (cocktail) => {
            return cocktail.name
        })
        let cocktailsGroupByName = values(keyBy(cocktails, (cocktail) => {
            return cocktail.name
        })).sort((cocktailA, cocktailB) => {
            return cocktailA.name > cocktailB.name
        })

        return (
            <div>
                {cocktails && cocktails.length ?
                    <div className="row">
                        {cocktailsGroupByName.map(cocktail => {
                            return (
                                <div className="col-sm-12 mb-3" key={cocktail.name}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{cocktail.name}</h5>
                                            <p className="card-text">{cocktailsCount[cocktail.name]}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    'Your cart is empty 🍻'
                }
            </div>
        )
    }
}
