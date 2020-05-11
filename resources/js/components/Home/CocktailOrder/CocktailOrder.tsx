import { countBy, keyBy, values } from 'lodash'
import React, { Component } from 'react';
import { Cocktail } from '../../../types';

interface Props {
    cocktails: Cocktail[]
}

export default class CocktailOrder extends Component<Props, {}> {
    render () {
        let { cocktails } = this.props
        let cocktailsCount = countBy(cocktails, (cocktail: Cocktail) => {
            return cocktail.name
        })
        let cocktailsGroupByName = values(keyBy(cocktails, (cocktail: Cocktail) => {
            return cocktail.name
        })).sort((cocktailA: Cocktail, cocktailB: Cocktail) => {
            return cocktailA.name > cocktailB.name ? 1 : -1
        })

        return (
            <div>
                {cocktails && cocktails.length ?
                    <div className="row">
                        {cocktailsGroupByName.map((cocktail: Cocktail) => {
                            return (
                                <div className="col-sm-12 mb-3" key={cocktail.name}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <span className="float-left">{cocktail.name}</span>
                                                <span className="float-right">{cocktailsCount[cocktail.name]}</span>
                                            </h5>
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
