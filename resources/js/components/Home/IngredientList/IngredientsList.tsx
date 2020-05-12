import React, { Component } from 'react'

interface Props {
  ingredientNames: string[]
  selectedIngredient: string | null
  onSelectIngredient: { (name: string): void }
}

export default class IngredientList extends Component<Props, {}> {
  render() {
    let { ingredientNames, selectedIngredient, onSelectIngredient } = this.props

    return (
      <div>
        {ingredientNames && ingredientNames.length ? (
          <table className='table'>
            <tbody>
              {ingredientNames.map((name) => {
                let className =
                  selectedIngredient === name ? 'bg-dark text-white' : ''
                return (
                  <tr
                    className='hover-effect'
                    key={name}
                    onClick={() => {
                      onSelectIngredient(name)
                    }}
                  >
                    <td className={' ' + className}>{name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          'No available ingredient at the moment :('
        )}
      </div>
    )
  }
}
