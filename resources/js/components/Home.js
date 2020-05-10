import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IngredientList from './Home/IngredientList';
import CocktailList from './Home/CocktailList';

class Home extends Component {
    constructor (props) {
        super(props)

        this.state = {
            selectedIngredient: null,
        }

        this.handleSelectIngredient = this.handleSelectIngredient.bind(this);
    }

    /**
     * Save the ingredient selected by the user in the state.
     * 
     * @param {string} ingredient 
     */
    handleSelectIngredient (ingredient) {
        this.setState({ selectedIngredient: ingredient })
    }

    render () {
        let { selectedIngredient } = this.state

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <IngredientList selectedIngredient={selectedIngredient} onSelectIngredient={this.handleSelectIngredient} />
                    </div>
                    <div className="col-md-4">
                        <CocktailList selectedIngredient={selectedIngredient} />
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
