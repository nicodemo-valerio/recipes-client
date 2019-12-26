import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '1em',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, isCompleted } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    <span> {title}</span>
                    <input
                        type="button"
                        onClick={this.props.delete.bind(this, id)}
                        value="delete"
                    />
                </p>
            </div>
        );
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem;