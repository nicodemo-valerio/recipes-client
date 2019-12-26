import React, { Component } from 'react'

export class CreateRecipe extends Component {
    onSubmit = e => {
        e.preventDefault();
        this.props.create(e.target.recipe.value,
            e.target.ingredients.value,
            e.target.steps.value);
        e.target.recipe.value = e.target.ingredients.value = e.target.steps.value = '';
    };

    render() {
        return (

            <form onSubmit={this.onSubmit} className="formAddRecipe">
                <div>
                    <label htmlFor="recipe">Recipe</label>
                    <input type="text" name="recipe" id="recipe" placeholder="Name of the recipe" />
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" name="ingredients" id="ingredients" placeholder="Separate with a comma" size="25" />
                </div>
                <div>
                    <label htmlFor="steps">Steps</label>
                    <input type="text" name="steps" id="steps" placeholder="Separate with a comma" size="25" />
                </div>
                <div>
                    <input type="submit" value="Insert" />
                </div>
            </form>
        )
    }
}

export default CreateRecipe;
