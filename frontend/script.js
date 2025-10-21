const API_URL = 'http://localhost:8000/todos'; // IMPORTANTE: Usamos localhost:8000 para acesso no navegador

document.addEventListener('DOMContentLoaded', fetchTodos);
document.getElementById('todo-form').addEventListener('submit', addTodo);

function renderTodo(todo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled>
        <span>${todo.title}</span>
    `;
    document.getElementById('todo-list').appendChild(li);
}

// Lógica de Obter Tarefas
async function fetchTodos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Falha ao buscar tarefas');
        
        const todos = await response.json();
        const list = document.getElementById('todo-list');
        list.innerHTML = ''; // Limpa a lista antes de renderizar
        todos.forEach(renderTodo);
    } catch (error) {
        console.error("Erro na comunicação com a API:", error);
        alert("Erro ao carregar tarefas. Verifique se o Docker está rodando corretamente.");
    }
}

// Lógica de Adicionar Tarefas
async function addTodo(event) {
    event.preventDefault();
    const titleInput = document.getElementById('todo-title');
    const title = titleInput.value.trim();

    if (!title) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, completed: false })
        });

        if (!response.ok) throw new Error('Falha ao adicionar tarefa');

        titleInput.value = ''; // Limpa o campo
        fetchTodos(); // Recarrega a lista
    } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
    }
}