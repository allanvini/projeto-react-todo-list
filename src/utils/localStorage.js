export function saveTodos(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function loadTodos(){
    const savedTodos = localStorage.getItem('todos');
    return saveTodos ? JSON.parse(savedTodos) : [];
}