# Project Overview

This is a full-stack web application built with React (frontend) and Express.js (backend), featuring a modern component-based architecture with shadcn/ui components, PostgreSQL database integration via Drizzle ORM, and TypeScript throughout.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### December 2024 - Lovable to Replit Migration
- Successfully migrated Mohammad Sami's portfolio from Lovable to Replit
- Updated routing from React Router to wouter for compatibility
- Implemented profile image with dynamic hover effects
- Redesigned skills section with card-based layout matching reference screenshots
- Added enhanced animations and visual effects throughout
- Replaced percentage-based skills with clean icon-based design
- Updated tech stack to include ML/Data Science, NLP, Web Development, Visualization, and Tools categories

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Style**: RESTful API with `/api` prefix
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reloading with tsx

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless driver for PostgreSQL

## Key Components

### Frontend Components
- **UI System**: Complete shadcn/ui component library including buttons, forms, dialogs, tables, charts, and navigation
- **Routing**: React Router setup with Index and 404 pages
- **Query Layer**: TanStack Query for efficient data fetching and caching
- **Toast System**: Multiple toast implementations (shadcn toast and Sonner)
- **Theming**: Dark theme support with CSS variables

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with username/password authentication
- **Middleware**: Request logging and error handling
- **Development Tools**: Vite integration for SSR in development

### Shared Components
- **Schema**: Shared database schema definitions with Zod validation
- **Types**: TypeScript types shared between frontend and backend

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests under `/api` prefix
3. **Storage Layer**: Abstract storage interface allows switching between implementations
4. **Database**: Drizzle ORM manages PostgreSQL interactions with type safety
5. **Response**: JSON responses with proper error handling and logging

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router)
- TanStack Query for server state management
- Tailwind CSS and shadcn/ui for styling
- Radix UI primitives for accessible components
- Lucide React for icons

### Backend Dependencies
- Express.js web framework
- Drizzle ORM with PostgreSQL support
- Neon Database serverless driver
- Session management with connect-pg-simple
- Date manipulation with date-fns

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type checking
- ESBuild for production builds
- Drizzle Kit for database migrations

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations run via `db:push` command

### Production Setup
- Node.js server serves built React app and API endpoints
- PostgreSQL database connection via environment variable
- Static files served from `dist/public`
- Environment-specific configurations

### Development Workflow
- `npm run dev`: Starts development server with hot reloading
- `npm run build`: Creates production build
- `npm run start`: Runs production server
- `npm run db:push`: Applies database schema changes

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository for easier development and deployment

2. **TypeScript Throughout**: Full TypeScript adoption for type safety across the entire stack

3. **Abstracted Storage**: Storage interface allows easy switching between in-memory (development) and PostgreSQL (production) implementations

4. **Component-First UI**: shadcn/ui provides a comprehensive, accessible component system that's customizable and maintainable

5. **Modern Tooling**: Vite for fast development, Drizzle for type-safe database operations, and TanStack Query for efficient data management

The application is designed to be scalable, maintainable, and developer-friendly with modern web development practices and comprehensive tooling support.