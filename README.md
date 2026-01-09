# SvelteKit Blog

A modern blog application built with SvelteKit, designed to be simple, fast, and efficient.

## Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via Docker)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Better Auth](https://www.better-auth.com/)

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- Docker (for the database)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd sveltekit-blog
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up the environment variables:
    Copy `.env.example` to `.env` and update the values if necessary.
    ```bash
    cp .env.example .env
    ```

### Database Setup

1.  Start the database container:

    ```bash
    npm run db:start
    ```

2.  Push the schema to the database:
    ```bash
    npm run db:push
    ```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run check`: Run Svelte check.
- `npm run format`: Format code with Prettier.
- `npm run lint`: Lint code with ESLint and Prettier.
- `npm run db:start`: Start the Docker database container.
- `npm run db:push`: Push schema changes to the database.
- `npm run db:studio`: Open Drizzle Studio to manage data.
