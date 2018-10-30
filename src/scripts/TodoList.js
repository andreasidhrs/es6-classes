import TodoItem from './TodoItem';

export default class TodoList {
    constructor(url, wrapper) {
        this.url = url;
        this.wrapper = wrapper;
        // Fetch the todos from API and call render when done.
        this.todos = [];
        this.getTodos().then( todos => {
            todos.forEach( todo => {
                this.todos.push(new TodoItem(todo.title, todo.completed, todo.id));
            });
            this.render();
        });
        this.registerEventHandlers(); // Register event handler.
    }

    registerEventHandlers() {
        this.wrapper.addEventListener('click', (e) => {
            const target = e.target;
            if(target.parentElement.classList.contains('todo-item')) {
                console.log('clicked a todo-item');
            }
        });
    }

    getTodos() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
            .then( res => res.json() )
            .then( json => resolve(json) )
            .catch( err => reject(err) );
        });
    }

    render() {
        this.wrapper.innerHTML = this.todos
                                     .map(todo => todo.render())
                                     .join('');
    }
}