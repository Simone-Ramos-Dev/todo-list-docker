from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import redis
import json
import uuid

# Conexão com o Redis
# O nome do host 'redis' é o nome do serviço definido no docker-compose.yml
try:
    r = redis.Redis(host='redis', port=6379, db=0)
    r.ping()
except Exception as e:
    print(f"Erro ao conectar ao Redis: {e}")
    # Em produção, você trataria melhor. Para o projeto, é um aviso.

app = FastAPI(title="Gerenciador de Tarefas Dockerizado")

class TodoItem(BaseModel):
    title: str
    completed: bool = False

@app.get("/todos")
def get_todos():
    """Retorna todas as tarefas."""
    try:
        keys = r.keys('todo:*')
        todos = []
        for key in keys:
            data = r.get(key)
            if data:
                todo = json.loads(data)
                todos.append({"id": key.decode().split(":")[1], **todo})
        return todos
    except Exception:
        return [] # Retorna lista vazia em caso de erro

@app.post("/todos", status_code=201)
def create_todo(item: TodoItem):
    """Cria uma nova tarefa."""
    try:
        item_id = str(uuid.uuid4())
        key = f"todo:{item_id}"
        r.set(key, item.model_dump_json())
        return {"id": item_id, **item.model_dump()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao criar tarefa: {e}")
    
# Implemente PUT e DELETE como exercícios