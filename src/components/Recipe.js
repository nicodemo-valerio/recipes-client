import React, { Component } from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';

export class Recipe extends Component {

    state = {
        _id: '',
        recipe: '',
        ingredients: '',
        steps: '',
        isEdit: false
    }

    onClickEdit = () => {
        this.setState({
            _id: this.props.recipe._id,
            recipe: this.props.recipe.recipe,
            ingredients: this.props.recipe.ingredients.toString(),
            steps: this.props.recipe.steps.toString(),
            isEdit: true
        }, console.log(this.state.recipe))
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.update.bind(this, this.state.recipe._id);
        this.props.update(
            this.state._id,
            this.state.recipe,
            this.state.ingredients,
            this.state.steps
        );
        this.setState({
            _id: '',
            recipe: '',
            ingredients: '',
            steps: '',
            isEdit: false
        });
    }

    render() {
        const { _id, recipe, ingredients, steps } = this.props.recipe;

        if (this.state.isEdit) {

            return (
                <form onSubmit={this.onSubmit} className="formAddRecipe">
                    <div>
                        <label htmlFor="recipe">Recipe</label>
                        <input
                            type="text"
                            name="recipe"
                            id="recipe"
                            value={this.state.recipe}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="ingredients">Ingredients</label>
                        <input
                            type="text"
                            name="ingredients"
                            id="ingredients"
                            value={this.state.ingredients}
                            size="25"
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="steps">Steps</label>
                        <input
                            type="text"
                            name="steps"
                            id="steps"
                            value={this.state.steps}
                            size="25"
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Update" />
                    </div>
                </form>
            );
        }
        else {
            return (
                <div key={_id} className="gridRecipe">
                    <div>
                        <h2>{recipe}</h2>
                        <button onClick={this.onClickEdit}>Edit</button>
                        <button onClick={this.props.delete.bind(this, _id)}>Delete</button>
                    </div>
                    <div>
                        <h3>Ingredients</h3>
                        <Ingredients ingredients={ingredients} />
                    </div>
                    <div>
                        <h3>Steps</h3>
                        <Steps steps={steps} />
                    </div>
                </div >
            );
        }


    }

}

export default Recipe;