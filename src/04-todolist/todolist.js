import React, { Component  } from 'react'

export class TodoList extends Component {

    constructor(){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleClick = i => () => {
        this.props.removeTodo(i);
    }

    handleChange = e => {
        this.setState({ input: e.currentTarget.value });
    }

    handleSubmit = () => {
        this.props.addTodo({text: this.state.input});
        this.setState({input: ''})
    }

    render() {
        return (
            <div className='todos-container'>
                <h1 className='todos-h1'>Todos</h1>
                <input type="text" onChange={this.handleChange} value={this.state.input} />
                <ul>
                    {this.state.todos.map(({ text }, i) => (
                        <li onClick={this.handleClick(i)} key={i}>
                            {text}
                        </li>
                    ))}
                </ul>
                <button className='todo--button' onClick={this.handleSubmit}>Add Todo</button>
            </div>
        )
    }
}
