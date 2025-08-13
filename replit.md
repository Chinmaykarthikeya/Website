# Overview

This is a personal portfolio website for Chinmay Karthikeya, a data analytics-focused Electronics & Communication Engineering graduate. The application is built as a full-stack web application showcasing professional skills, projects, and providing a contact form for potential opportunities. The portfolio emphasizes data analysis expertise with projects in sales analysis, content analytics, and business intelligence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Component Structure**: Modular section-based components (Hero, About, Skills, Projects, Testimonials, Contact, Footer)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` prefix
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: Shared schema definitions between client and server using Zod for validation
- **Database**: PostgreSQL configured via Neon Database serverless connection
- **Tables**: Users table for authentication and contacts table for form submissions
- **Migrations**: Drizzle Kit for database schema migrations

## Authentication & Authorization
- **Current Implementation**: Basic user schema prepared but no active authentication
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: CSRF protection and input validation through Zod schemas

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: @neondatabase/serverless driver for database connectivity

## Email Services
- **Web3Forms**: Direct email delivery service for contact form submissions
- **Integration**: Frontend-only solution requiring access key from web3forms.com
- **Delivery**: Messages sent directly to karthikeyachinmay@gmail.com without backend setup

## UI & Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for interactive content display

## Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Analytics & Monitoring
- **Date-fns**: Date manipulation and formatting utilities
- **Custom Logging**: Request timing and response logging middleware

## External Assets
- **Unsplash**: Stock photography for portfolio images and project showcases
- **Custom Resume**: PDF download functionality for resume access