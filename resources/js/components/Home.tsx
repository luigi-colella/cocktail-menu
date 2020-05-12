import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IngredientList from './Home/IngredientList'
import CocktailList from './Home/CocktailList'
import api from '../services/api'
import Spinner from './Home/Spinner'
import Card from './Home/Card'
import CocktailOrder from './Home/CocktailOrder/CocktailOrder'
import { Cocktail, SelectedCocktails, Ingredient } from '../types'
import { get, omit, sum, random, isEmpty } from 'lodash'
import ConfirmModal from './Home/ConfirmModal'

interface State {
  fetchingIngredients: boolean
  ingredientNames: string[]
  selectedIngredient: string | null
  fetchingCocktails: boolean
  cocktails: Cocktail[]
  selectedCocktails: SelectedCocktails
  confirmModalId: string
}

class Home extends Component<Readonly<{}>, State> {
  constructor(props: Readonly<{}>) {
    super(props)

    this.state = {
      fetchingIngredients: false,
      ingredientNames: [],
      selectedIngredient: null,
      fetchingCocktails: false,
      cocktails: [],
      selectedCocktails: {},
      confirmModalId: 'confirm-modal-' + random(5),
    }

    this.handleSelectIngredient = this.handleSelectIngredient.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this)
    this.handleSubtractCocktail = this.handleSubtractCocktail.bind(this)
    this.handleRemoveCocktail = this.handleRemoveCocktail.bind(this)
    this.submitOrder = this.submitOrder.bind(this)
    this.handleStartNewOrder = this.handleStartNewOrder.bind(this)
  }

  /**
   * When the component has been mounted, fetch the ingredients list.
   */
  componentDidMount() {
    this.setState({ fetchingIngredients: true })

    api
      .getIngredients()
      .then((data) => {
        // map the response data into an array of names of ingredients and sort it
        let ingredientNames = data.map(({ name }) => name).sort()
        this.setState({ ingredientNames: ingredientNames })
      })
      .finally(() => {
        this.setState({ fetchingIngredients: false })
      })
  }

  /**
   * Save the ingredient selected by the user in the state
   * and fetch the related drinks.
   */
  handleSelectIngredient(ingredient: Ingredient['name']) {
    this.setState({
      fetchingCocktails: true,
      selectedIngredient: ingredient,
    })

    api
      .getCocktailsByIngredient(ingredient)
      .then((data) => {
        // sort the cocktails by name before to save them
        let cocktails = data.sort((cocktailA, cocktailB) => {
          return cocktailA.name > cocktailB.name ? 1 : -1
        })
        this.setState({ cocktails: cocktails })
      })
      .finally(() => {
        this.setState({ fetchingCocktails: false })
      })
  }

  /**
   * Add a quantity of the cocktail in the user's order.
   */
  handleAddCocktail(cocktailName: Cocktail['name']) {
    let selectedCocktails = this.state.selectedCocktails
    let cocktailCount = get(this.state.selectedCocktails, cocktailName, 0)
    this.setState({
      selectedCocktails: Object.assign({}, selectedCocktails, {
        [cocktailName]: cocktailCount + 1,
      }),
    })
  }

  /**
   * Subtract a quantity of the cocktail from the user's order.
   */
  handleSubtractCocktail(cocktailName: Cocktail['name']) {
    let cocktailCount = get(this.state.selectedCocktails, cocktailName)
    if (cocktailCount === 1) {
      return this.handleRemoveCocktail(cocktailName)
    }
    this.setState({
      selectedCocktails: Object.assign({}, this.state.selectedCocktails, {
        [cocktailName]: cocktailCount - 1,
      }),
    })
  }

  /**
   * Remove all quantities of the cocktail from the user's order.
   */
  handleRemoveCocktail(cocktailName: Cocktail['name']) {
    this.setState({
      selectedCocktails: omit(this.state.selectedCocktails, [cocktailName]),
    })
  }

  /**
   * Submit the current order of cocktails.
   */
  submitOrder() {
    $('#' + this.state.confirmModalId).modal('show')
  }

  /**
   * Clear the current order and let user start a brand new one.
   */
  handleStartNewOrder() {
    this.setState({
      selectedIngredient: null,
      cocktails: [],
      selectedCocktails: {},
    })
  }

  render() {
    let {
      fetchingIngredients,
      ingredientNames,
      selectedIngredient,
      fetchingCocktails,
      cocktails,
      selectedCocktails,
    } = this.state
    let titleForIngredientList = selectedIngredient
      ? 'You selected: ' + selectedIngredient
      : 'Choose an ingredient!'
    let titleForCocktailList = 'Suggested drinks for: ' + selectedIngredient
    let titleForSelectedCocktails =
      'Selected cocktails: ' + sum(Object.values(selectedCocktails))
    let showSubmitButton = !isEmpty(selectedCocktails)

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <Card title={titleForIngredientList}>
              {fetchingIngredients ? (
                <Spinner />
              ) : (
                <IngredientList
                  ingredientNames={ingredientNames}
                  selectedIngredient={selectedIngredient}
                  onSelectIngredient={this.handleSelectIngredient}
                />
              )}
            </Card>
          </div>
          <div className='col-md-4'>
            <Card title={titleForCocktailList}>
              {fetchingCocktails ? (
                <Spinner />
              ) : (
                <CocktailList
                  cocktails={cocktails}
                  onSelectCocktail={this.handleAddCocktail}
                />
              )}
            </Card>
          </div>
          <div className='col-md-4'>
            <Card
              title={titleForSelectedCocktails}
              actionButton={
                showSubmitButton
                  ? { text: 'ORDER!', cb: this.submitOrder }
                  : undefined
              }
            >
              <CocktailOrder
                cocktails={selectedCocktails}
                onAddCocktail={this.handleAddCocktail}
                onSubtractCocktail={this.handleSubtractCocktail}
                onRemoveCocktail={this.handleRemoveCocktail}
              />
            </Card>
          </div>
        </div>

        <ConfirmModal
          title='Successful order!'
          text='Your cocktails has been ordered. Cheers!'
          modalId={this.state.confirmModalId}
          onStartNewOrder={this.handleStartNewOrder}
        />
      </div>
    )
  }
}

export default Home

if (document.getElementById('home-app')) {
  ReactDOM.render(<Home />, document.getElementById('home-app'))
}
