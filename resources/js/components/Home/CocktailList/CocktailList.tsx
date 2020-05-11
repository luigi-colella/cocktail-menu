import React, { Component } from 'react';
import { Cocktail } from '../../../types';

interface Props {
    cocktails: Cocktail[],
    onSelectCocktail: (cocktail: Cocktail) => void
}

export default class CocktailList extends Component<Props> {
    render () {
        let { cocktails, onSelectCocktail } = this.props

        return (
            <div>
                {cocktails && cocktails.length ?
                    <div className="row">
                        {cocktails.map(cocktail => {
                            return (
                                <div className="col-sm-12 mb-3" key={cocktail.name} onClick={() => { onSelectCocktail(cocktail) }}>
                                    <div className="card hover-effect">
                                        <div className="card-body">
                                            <div className="media">
                                                <img className="align-self-center mr-3" src={cocktail.thumbnailUrl} alt={cocktail.name} style={{ width: '25%' }} />
                                                <div className="media-body align-self-center">
                                                    <h5 className="mt-0">{cocktail.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    'No suggested drinks 🍻'
                }
            </div>
        )
    }
}
