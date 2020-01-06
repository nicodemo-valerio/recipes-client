import React, { Component } from 'react';
import Recipes from './components/Recipes';
import CreateRecipe from './components/CreateRecipe';
import axios from 'axios';
import './App.css';

//const SERVER = 'http://localhost:5000/recipes/';
const SERVER = 'https://recipes-ncdm-server.herokuapp.com/recipes/';

class App extends Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        axios.get(SERVER)
            .then(res => {
                this.setState({ recipes: res.data })
            })
            .catch(err => console.log(err));
    }

    create = (recipe, ingredients, steps) => {
        axios.post(SERVER,
            {
                recipe: recipe,
                ingredients: ingredients.split(','),
                steps: steps.split(',')
            })
            .then(res => {
                this.setState({
                    recipes: [...this.state.recipes, res.data]
                })
            })
            .catch(err => console.log(err));
    }

    update = (id, recipe, ingredients, steps) => {
        axios.put(`${SERVER}${id}`,
            {
                recipe: recipe,
                ingredients: ingredients.split(','),
                steps: steps.split(',')
            })
            .then(res => {
                const allRecipes = this.state.recipes.slice();
                const newRecipes = allRecipes.filter(recipe => recipe._id !== id);
                newRecipes.push(res.data);
                this.setState({
                    recipes: newRecipes
                });
            })
            .catch(err => console.log(err));
    }

    delete = id => {
        axios.delete(`${SERVER}${id}`)
            .then(res => {
                const allRecipes = this.state.recipes.slice();
                const newRecipes = allRecipes.filter(recipe => recipe._id !== id);
                this.setState({ recipes: newRecipes });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h1>Simple recipes</h1>
                <CreateRecipe create={this.create} />
                <div className="grid">
                    <Recipes
                        recipes={this.state.recipes}
                        update={this.update}
                        delete={this.delete}
                    />
                </div>
            </div>
        );
    }
}

export default App;