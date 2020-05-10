import React, { Component } from 'react';
import api from '../../../services/api';

export default class IngredientList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ingredients: []
        };
    }

    componentDidMount () {
        api.getIngredients().then((data) => {
            console.log(data)
            this.setState({ ingredients: data });
        });
    }

    render () {
        const ingredients = this.state.ingredients;
        console.log(ingredients)

        return (
            <div className="card">
                <div className="card-header">Choose an ingredient!</div>

                <div className="card-body">
                    <table className="table table-hover">
                        <tbody>
                        {ingredients.map((ingredient) => {
                            return <tr><td>{ingredient.name}</td></tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
