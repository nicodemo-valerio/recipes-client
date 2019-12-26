import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

export class Recipes extends Component {
    sortByName = (a, b) => {
        var nameA = a.recipe.toUpperCase();
        var nameB = b.recipe.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    render() {
        return (
            this.props.recipes.sort(this.sortByName)
                .map(recipe => (
                    <Recipe
                        key={recipe._id}
                        recipe={recipe}
                        update={this.props.update}
                        delete={this.props.delete}
                    />
                ))
        );
    }
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default Recipes;
