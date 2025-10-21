# 🚀 Gerenciador de Tarefas Dockerizado (TODO List)

Este é um projeto colaborativo (Full-Stack Simples) que utiliza Docker Compose para orquestrar três serviços essenciais: uma API (Backend) em FastAPI, um banco de dados em memória (Redis) e uma interface de usuário simples (Frontend) servida via Nginx.

O objetivo principal deste projeto é demonstrar proficiência em **Dockerização de ambientes de múltiplos serviços** e a **integração entre containers**.

## 🛠️ Tecnologias Utilizadas

| Componente | Tecnologia | Função |
| :--- | :--- | :--- |
| **Backend/API** | **FastAPI (Python)** | Responsável pela lógica de negócios e pelos endpoints CRUD (tarefas). |
| **Banco de Dados** | **Redis** | Usado como um banco de dados rápido e em memória para persistência das tarefas. |
| **Frontend/UI** | **HTML, CSS e JavaScript** | Interface simples para interação com a API, servida por um container **Nginx**. |
| **Orquestração** | **Docker Compose** | Gerencia a construção e a inicialização de todos os serviços em uma única rede isolada. |

## 📦 Estrutura do Projeto
todo-list-docker/ ├── backend/ # Código Python, Dockerfile da API │ ├── app/ # Arquivos do FastAPI │ └── requirements.txt ├── frontend/ # Código HTML, CSS, JS e Dockerfile do Nginx ├── docker-compose.yml # Define e interliga todos os serviços └── README.md # Este arquivo └── LICENSE # Licença de uso do projeto


## ⚙️ Como Executar o Projeto

Para subir o ambiente completo, você só precisa ter o **Docker** e o **Docker Compose** instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd todo-list-docker
    ```

2.  **Inicie e Construa os Contêineres:**
    O comando abaixo irá construir as imagens necessárias e iniciar os três serviços (`api`, `frontend`, `redis`).
    ```bash
    docker compose up --build
    ```

3.  **Acesse a Aplicação:**
    * **Frontend (Aplicação):** Abra seu navegador em `http://localhost:3000`
    * **Backend (API Docs):** A documentação interativa da API estará em `http://localhost:8000/docs`

4.  **Parar a Aplicação:**
    Para derrubar os serviços e remover os contêineres:
    ```bash
    docker compose down
    ```

## 🤝 Colaboração

Este projeto foi desenvolvido em colaboração por:

* **[Simone/ https://github.com/Simone-Ramos-Dev]:** Foco no Backend (FastAPI, Redis) e Liderança na Infraestrutura Docker Compose.
* **[Janine/ https://github.com/Janine-Nine]:** Foco no Frontend (HTML/JS/Nginx) e Integração da UI com a API.

Sinta-se à vontade para abrir Issues ou Pull Requests para melhorias!

---
