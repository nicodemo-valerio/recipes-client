import React, { Component } from 'react';

export class AddTodo extends Component {

    state = {
        title: ""
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.create(this.state.title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default AddTodo;