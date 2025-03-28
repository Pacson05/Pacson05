function filterTodosByUserId(todos, userId) {
    return todos.filter(todo => todo.userId === userId);
  }
  
  async function fetchAndFilterTodos(userId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    console.log(filterTodosByUserId(todos, userId));
  }
  
  fetchAndFilterTodos(3);
