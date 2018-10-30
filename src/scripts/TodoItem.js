export default class TodoItem {
    constructor(title, done, id) {
        this.title = title;
        this.done = done;
        this.id = id;
    }

    toggleDone() {
        this.done = !this.done;
    }

    render() {
        return `<div class="todo-item${ (this.done) ? ' completed': ''}">
                    <p>${this.title}</p>
                </div>`;
    }
}