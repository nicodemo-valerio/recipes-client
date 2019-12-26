import React, { Component } from 'react'

export class Steps extends Component {
    render() {
        const steps = this.props.steps.map(step => {
            return <li key={step}>{step}</li>
        })
        return (
            <ol>
                {steps}
            </ol>
        )
    }
}

export default Steps
