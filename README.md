# Fullstack Authorization App

This is a fullstack application built with **Next.js 14 (App Router)** and **MongoDB** for user authentication and authorization. Users can register, log in, and access protected routes using JSON Web Tokens (JWT) stored in **cookies**. Certain pages, like `/dashboard` and `/projects`, are accessible only to authenticated users, while the `/homepage` is always publicly visible.

## Features

- **Next.js 14 with App Router**: For server-side rendering, dynamic routing, and fast development.
- **ServerActions**: Next.js Server action to create logic for authentication
- **MongoDB**: Database for storing user credentials.
- **JWT Authentication**: Secure authentication using JWT tokens stored in cookies.
- **Protected Routes**: Routes like `/dashboard` and `/projects` are protected and only visible to logged-in users, if you not logged-in it will redirect you to `/login`.
- **Public Routes**: The `/homepage` is always publicly accessible, even to unauthenticated users.
- **User Registration & Verification**: Users can sign up, and their tokens are verified for route access.
