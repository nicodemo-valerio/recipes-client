import React, { Component } from 'react'

export class Ingredients extends Component {
    render() {
        const ingredients = this.props.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
        })
        return (
            <ul>
                {ingredients}
            </ul>
        )
    }
}

export default Ingredients
