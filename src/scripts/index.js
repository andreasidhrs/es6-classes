import '../styles/index.scss';
import TodoList from './TodoList';

new TodoList(
    'https://jsonplaceholder.typicode.com/todos',
    document.getElementById('todolist-wrapper')
);
