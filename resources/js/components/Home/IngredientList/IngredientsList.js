import React, { Component } from 'react';
import api from '../../../services/api';
import Spinner from './Spinner';

export default class IngredientList extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            fetchingIngredients: false,
            ingredientNames: [],
        };
    }

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

    render () {
        let { fetchingIngredients, ingredientNames } = this.state
        let { selectedIngredient, onSelectIngredient } = this.props

        return (
            <div className="card">
                <div className="card-header">{selectedIngredient ? 'You selected: ' + selectedIngredient : 'Choose an ingredient!'}</div>
                <div className="card-body" style={{ maxHeight: '75vh', overflow: 'auto' }}>
                    {fetchingIngredients ? 
                        <Spinner />
                        :
                        <table className="table table-hover">
                            <tbody>
                                {ingredientNames.map(name => {
                                    let className = selectedIngredient === name ? 'bg-success text-white' : ''
                                    return (
                                        <tr key={name} onClick={() => { onSelectIngredient(name) }}>
                                            <td className={'pointer-on-hover ' + className}>{name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        )
    }
}
