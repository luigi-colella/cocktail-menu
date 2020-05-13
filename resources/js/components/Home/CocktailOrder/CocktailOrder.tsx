import React, { Component } from 'react'
import { SelectedCocktails, Cocktail } from '../../../types'

interface Props {
  cocktails: SelectedCocktails
  onAddCocktail: (cocktailName: Cocktail['name']) => void
  onSubtractCocktail: (cocktailName: Cocktail['name']) => void
  onRemoveCocktail: (cocktailName: Cocktail['name']) => void
}

export default class CocktailOrder extends Component<Props, {}> {
  render() {
    let {
      cocktails,
      onAddCocktail,
      onSubtractCocktail,
      onRemoveCocktail,
    } = this.props
    let sortedCocktailNames = Object.keys(cocktails).sort()

    return (
      <div>
        {sortedCocktailNames.length ? (
          <div className='row'>
            {sortedCocktailNames.map((cocktailName) => {
              return (
                <div className='col-sm-12 mb-3' key={cocktailName}>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        <span className='float-left'>{cocktailName}</span>
                        <span className='float-right'>
                          {cocktails[cocktailName]}
                        </span>
                      </h5>
                    </div>
                    <div className='card-body'>
                      <a
                        href='#'
                        className='btn btn-dark btn-sm float-right ml-1'
                        onClick={() => {
                          onAddCocktail(cocktailName)
                        }}
                      >
                        +
                      </a>
                      <a
                        href='#'
                        className='btn btn-dark btn-sm float-right ml-1'
                        onClick={() => {
                          onSubtractCocktail(cocktailName)
                        }}
                      >
                        -
                      </a>
                      <a
                        href='#'
                        className='btn btn-danger btn-sm float-right ml-1'
                        onClick={() => {
                          onRemoveCocktail(cocktailName)
                        }}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          'Your cart is empty 🍸'
        )}
      </div>
    )
  }
}
