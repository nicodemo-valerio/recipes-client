import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

export class Todos extends Component {
    static displayName = Todos.name;

    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                delete={this.props.delete}
            />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;