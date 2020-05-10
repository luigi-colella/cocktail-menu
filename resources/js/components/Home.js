import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IngredientList from './Home/IngredientList';

class Home extends Component {

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <IngredientList />
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">THis is a kind of maig</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
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
