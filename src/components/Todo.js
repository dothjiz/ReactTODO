import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component{
    render(){
        return this.props.todos.map((todo) => (
            //<h3>{todo.title}</h3>
            <TodoItem key = {todo.id} todo = {todo} />
        ));
            
    }
}

export default Todos;