import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IngredientList from './Home/IngredientList';
import CocktailList from './Home/CocktailList';
import api from '../services/api';
import Spinner from './Home/Spinner';
import Card from './Home/Card';

class Home extends Component {
    constructor (props) {
        super(props)

        this.state = {
            fetchingIngredients: false,
            ingredientNames: [],
            selectedIngredient: null,
            cocktailsNames: [],
        }

        this.handleSelectIngredient = this.handleSelectIngredient.bind(this);
    }

    /**
     * When the component has been mounted, fetch the ingredients list.
     */
    componentDidMount () {
        this.setState({fetchingIngredients: true});

        api.getIngredients()
            .then((data) => {
                // map the response data into an array of names of ingredients and sort it
                let ingredientNames = data.map(({name}) => name).sort();
                this.setState({ ingredientNames: ingredientNames })
            })
            .finally(() => {
                this.setState({ fetchingIngredients: false })
            })
    }

    /**
     * Save the ingredient selected by the user in the state
     * and fetch the related drinks.
     * 
     * @param {string} ingredient 
     */
    handleSelectIngredient (ingredient) {
        this.setState({ selectedIngredient: ingredient })
    }

    render () {
        let { fetchingIngredients, ingredientNames, selectedIngredient, cocktailsNames } = this.state
        let titleForIngredientList = selectedIngredient ? 'You selected: ' + selectedIngredient : 'Choose an ingredient!'
        let titleForCocktailList = 'Suggested drinks for: ' + selectedIngredient

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <Card title={titleForIngredientList}>
                            {fetchingIngredients ?
                                <Spinner />
                                :
                                <IngredientList
                                    ingredientNames={ingredientNames}
                                    selectedIngredient={selectedIngredient}
                                    onSelectIngredient={this.handleSelectIngredient}
                                />
                            }
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card title={titleForCocktailList}>
                            <CocktailList cocktails={cocktailsNames} />
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">THis is a kind of maig</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

if (document.getElementById('home-app')) {
    ReactDOM.render(<Home />, document.getElementById('home-app'));
}
