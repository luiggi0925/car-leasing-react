import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index.js'
import TodoList from '../components/todoList.js'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToPropts = state => {
    return  {
        todos : getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToPropts = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToPropts,
    mapDispatchToPropts
)(TodoList)

export default VisibleTodoList