# Enpal Todo Frontend

This repository contains the frontend for the Enpal Todo List project built with Angular using standalone components. It communicates with the NestJS backend API ([Link to repository](https://github.com/Kooroshoo/enpal-todo-backend/tree/main)) to manage Todo tasks.

## Features
- Display the list of tasks
- Add a new task using Reactive Forms
- Toggle task completion status
- Delete a task
- Organized using reusable standalone components
- Communicates with the backend via a dedicated Task Service

## Technologies Used
- Angular v14+ (with Standalone Components)
- Reactive Forms & HttpClient
- TypeScript
- Node.js (latest LTS recommended)
- npm

## Installation
- Clone the repository:
  ```bash
  git clone https://github.com/Kooroshoo/enpal-todo-frontend.git
  cd enpal-todo-frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```

## Running the Application

### Using Docker Compose (Recommended):

If you have Docker and Docker Compose installed, you can quickly run the frontend application using Docker Compose.

  - Ensure Docker is running.
  - From the repository root, run:
      ```bash
      docker-compose up
      ```
  - Access the application at http://localhost:4200.

### Without Docker Compose:
  - From the todo-fronend folder, start the development server:
      ```bash
      ng serve
      ```
  - Open http://localhost:4200 in your browser.

### Configuration
  - The API endpoint is configured in the Task Service ``` src/app/services/task.service.ts ```(default: http://localhost:3000/tasks).
  - Ensure CORS is enabled on the backend for proper communication.

### Notes
  - For production, the Angular app is built using a multi-stage Dockerfile that compiles the app and serves it via Nginx.
  - This project uses standalone components to promote a modular and maintainable codebase.


      
