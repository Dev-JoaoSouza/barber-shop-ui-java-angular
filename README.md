# 💈 Projeto de Agendamento de Atendimento - Barbearia

## 💻 Sobre o Projeto

Este projeto tem como objetivo desenvolver uma aplicação completa para **agendamento de atendimentos em uma barbearia**, composta por um **frontend em Angular** e um **backend em Java com Spring**.

A aplicação permitirá o **cadastro de clientes, barbeiros e horários disponíveis**, além do **agendamento e gerenciamento dos atendimentos**.

* **Frontend:** Desenvolvido em **Angular**, utilizando **Angular Material** para a interface visual.
* **Backend:** Desenvolvido em **Java com Spring Boot**, utilizando **JPA com Hibernate** e **PostgreSQL** para persistência dos dados, com controle de versões do banco via **Flyway**.

---

## 🧱 Estrutura do Projeto

* **barber-shop-ui-fronted** → Aplicação Angular responsável pela interface e interação com o usuário.
* **barber-shop-ui-backend** → API REST desenvolvida em Java Spring Boot para gerenciar os dados e a lógica do sistema.

---

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

### 🖥️ Frontend (Angular)

Antes de iniciar o módulo de frontend, é recomendado possuir conhecimentos prévios em:

| Tecnologia     | Nível               |
| -------------- | ------------------- |
| Javascript     | Intermediário       |
| Typescript     | Intermediário       |
| HTML           | Intermediário       |
| CSS            | Intermediário       |
| Docker         | Básico *(opcional)* |
| Docker Compose | Básico *(opcional)* |

### ⚙️ Backend (Java Spring)

Antes de iniciar o módulo de backend, é recomendado possuir conhecimentos prévios em:

| Tecnologia     | Nível               |
| -------------- | ------------------- |
| Java           | Intermediário       |
| SQL            | Intermediário       |
| Gradle         | Básico              |
| Spring Boot    | Básico              |
| Docker         | Básico *(opcional)* |
| Docker Compose | Básico *(opcional)* |

---

## 🛠️ Habilidades e Sub-habilidades Desenvolvidas

### 🌐 Frontend

* Consumo de API REST
* Comunicação com o backend
* Componentização e reutilização de componentes Angular
* Criação de formulários reativos e validações
* Uso do Angular Material para design responsivo

### ⚙️ Backend

* Criação de API RESTful com boas práticas
* Uso correto dos verbos HTTP
* Gerenciamento e versionamento do banco de dados com Flyway
* Mapeamento e persistência de dados com JPA e Hibernate
* Implementação de camadas de serviço e repositório

---

## 🎯 Objetivos e Resultados Esperados

Ao final do desenvolvimento, os estudantes serão capazes de:

### 🌐 Frontend

* Criar um projeto Angular do zero.
* Consumir APIs REST de forma eficiente.
* Aplicar componentização para organizar e reaproveitar código.
* Utilizar Angular Material para criar uma interface moderna e responsiva.

### ⚙️ Backend

* Criar um projeto Java com Spring Boot.
* Construir uma API REST com boas práticas de arquitetura.
* Integrar a aplicação com banco de dados PostgreSQL.
* Gerenciar versões do banco de dados com Flyway.
* Implementar persistência e consultas com JPA/Hibernate.

---

## 🧩 Tecnologias Utilizadas

**Frontend:**

* Angular 20+
* Angular Material
* RxJS
* TypeScript
* HTML5 / CSS3

**Backend:**

* Java 17+
* Spring Boot
* Spring Data JPA / Hibernate
* PostgreSQL
* Flyway
* Gradle

**Infraestrutura (opcional):**

* Docker
* Docker Compose

---

## 🚀 Como Executar o Projeto

### 📦 Backend

```bash
# Acesse o diretório
cd backend

# Execute com Gradle
./gradlew bootRun
```

A API estará disponível em:
📍 `http://localhost:8080`

---

### 💻 Frontend

```bash
# Acesse o diretório
cd frontend

# Instale as dependências
npm install

# Execute o projeto
ng serve
```

A aplicação estará disponível em:
🌐 `http://localhost:4200`

---

## 👥 Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto!
Basta fazer um **fork** deste repositório, criar uma **branch** para sua feature e enviar um **pull request**.

---

## 🧾 Licença

Este projeto está sob a licença **MIT**.
Você pode usar, copiar, modificar e distribuir livremente, desde que mantenha os créditos.
