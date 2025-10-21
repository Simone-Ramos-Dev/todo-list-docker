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