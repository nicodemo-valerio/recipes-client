import React, { Component } from 'react';
import Todos from './components/Todos';
import AddComponent from './components/AddComponent';
import uuid from 'uuid';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Clean hostel',
                isCompleted: true
            },
            {
                id: uuid.v4(),
                title: 'Run 10k',
                isCompleted: true
            },
            {
                id: uuid.v4(),
                title: 'Complete react app',
                isCompleted: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo;
            })
        });
    }

    create = (title) => {
        const todoItem = {
            id: uuid.v4(),
            title,
            isCompleted: false
        }
        this.setState({
            todos: [...this.state.todos, todoItem]
        });
    }

    delete = (id) => {
        console.log("delete " + id);
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    }

    render() {
        return (
            /*
              <Layout>
              <Route exact path='/' component={Home} />
              <Route path='/counter' component={Counter} />
              <Route path='/fetch-data' component={FetchData} />
              </Layout>
            */
            <layout>
                <AddComponent create={this.create} />
                <Todos todos={this.state.todos}
                    markComplete={this.markComplete}
                    delete={this.delete}
                />
            </layout>
        );
    }
}
