# Task Board Challenge

This is a solution to the [My Task Board on DevChallenges.io](https://devchallenges.io/challenge/my-task-board-app). DevChallenges.io help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Local Installation and Execution](#local-installation-and-execution)
- [Important API Endpoints](#important-api-endpoints)
- [Contributions](#contributions)
- [Author](#author)

## Overview

The application allows you to manage tasks within a board. Key features include creating, editing, and deleting tasks, as well as managing board information.

A new feature in this version is inline editing (double-click) of the board name and description. Double-clicking the title or description activates a text field; Pressing `Enter` or losing focus confirms the change and sends a `PATCH` request to the server to update the resource in the database.

## Features

- Displaying tasks on the board.
- Creating new tasks (via UI/form).
- Editing and deleting tasks.
- Double-clicking to edit the board name and description (save with Enter/blur).
- Persistence with Prisma and a relational database.

## Project Architecture

Main structure (summary):

- `client/`: frontend in React, Vite, and Tailwind.
- `client/src/components/` contains components such as `Header.tsx`, `Tasks.tsx`, and `TaskCard.tsx`.
- `client/src/pages` contains the application pages. - `client/src/services/` contains API calls (`board.ts`, `task.ts`).
- `client/src/store/boardStore.ts` uses `zustand` for local board state.
- `src/`: Express server with controllers, routes, and database access via Prisma.
- `src/board/` and `src/task/` contain server controllers and stores.
- `src/board/network.ts` defines REST routes such as `POST /api/board/`, `GET /api/board/:id`, `PATCH /api/board/:id`, `DELETE /api/board/:id`, etc.
- `src/task/network.ts` defines REST routes such as `POST /api/task/:id_board`, `GET /api/task/:id_board/:id`, `PUT /api/task/:id_board/:id`, `DELETE /api/task/:id_board/:id`, etc.

This separation allows you to deploy the frontend as a static site and expose the API separately (or as serverless functions) depending on your implementation strategy.

## Technologies

- Frontend: React, Vite, TypeScript, Tailwind CSS, Zustand
- Backend: Node.js, Express, TypeScript
- ORM: Prisma (with `@prisma/client`)
- Database: PostgreSQL / MySQL / SQLite / SQLite Under Development (configurable via `DATABASE_URL`)
- Implementation: Vercel (recommended for the frontend + serverless features) or other platforms (Railway, Render)

## Screenshots

|                       Board Page                       |                      Task Editing                       |
| :----------------------------------------------------: | :-----------------------------------------------------: |
| ![Board Page Screenshot](./screenshots/board-page.png) | ![Task Editing Screenshot](./screenshots/task-edit.png) |

## Local Installation and Execution

Requirements: `pnpm` (or `npm` if you prefer), Node.js.

1. Install dependencies (root and client):

```tap
# In the repository root (installs server dependencies)
pnpm install

# On the client
cd client
pnpm install
```

2. Configure environment variables: create a `.env` file in the root directory with at least:

```
DATABASE_URL="postgresql://username:password@host:port/databasename"
```

3. Generate the Prisma client and apply migrations (if applicable):

```tap
pnpm prisma generate
# apply migrations if included (optional)
pnpm prisma migrate deploy
```

4. Run the server in development mode (from the root directory):

```tap
pnpm dev
```

5. Run the client (in another terminal):

```tap
cd client
pnpm dev
```

6. Open the application in your browser (e.g., `http://localhost:5173`) and navigate the board.

## Important API Endpoints

Main routes defined in `src/board/network.ts` and `src/task/network.ts` (summary):

- `POST /api/board/` - Create a board
- `GET /api/board/` - Get all boards
- `GET /api/board/:id` - Get a board with its tasks
- `PATCH /api/board/:id` - Update board name/description (used for inline editing)
- `DELETE /api/board/:id` - Delete board

And for tasks (`/api/task/:id_board/:id`) there are routes to create/edit/delete tasks.

Example of a request to update the board from the client:

```http
PATCH /api/board/<boardId>
Content type: application/json

{ "name": "My Task Board", "description": "Tasks to keep organised" }
```

## Contributions

If you want to contribute:

1. Fork/branch the repository.
2. Create a branch of features and open a Pull Request.
3. Run and test the changes locally before submitting.

## Author

- Website - [Leonardo Rivero](https://codingleonardo.github.io/)
- DevChallenges.io - [@CodingLeonardo](https://devchallenges.io/profile/8c0bdef8-0f64-4c92-8640-bcae8d05fb4b)
- Twitter - [@CodingLeonardo](https://www.twitter.com/CodingLeonardo)
