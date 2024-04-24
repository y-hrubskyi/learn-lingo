# Learn Lingo App

This project was bootstrapped with [Vite + React](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react). To get acquainted and configure additional features [refer to documentation](https://vitejs.dev).

## Overview

Learn Lingo App is a web application that allows users to browse teachers and book trial lesson. The platform provides a catalog of available teachers, with options to filter by language, level of knowledge and price. Users can also add teachers to their favorites list. Additionally, the project incorporates a responsive design approach to ensure optimal viewing across different devices.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

## Features

- **User Authentication:** Register securely with unique credentials. Login easily to access your account.
- **Teacher Browsing:**
  Browse a catalog of available teachers, filtering by language, level of knowledge and price.
- **Favorites:**
  Add teachers to your favorites list for quick access.
- **User-Friendly Interface:**
  Enjoy a seamless experience with an intuitive, attractive and responsive design.
- **Accent Color Customization:**
  Personalize your experience by choosing your preferred accent color for the application interface.

## Tech Stack

- **Frontend:**
  - React: A popular JavaScript library for building user interfaces.
  - Styled Components: For styling and theming components in a dynamic and maintainable way.
  - React Router: Declarative routing in single-page applications.
  - react-hot-toast: React notifications library for displaying toast messages.
- **Backend:**
  - Firebase: Google's platform for web and mobile app development, providing real-time database, authentication, hosting, and cloud functions.
- **Deployment:**
  - GitHub Pages: Hosting platform for deploying the frontend.
- **Version Control:**
  - Git: Distributed version control system for tracking changes in the codebase.
- **Development Tools:**
  - Visual Studio Code: An integrated development environment for efficient coding.
  - GitHub: Version control platform for collaborative development.

## Project Structure

```plaintext
learn-lingo/
|-- public/               # Public assets and files
|-- src/                  # Source code
|   |-- assets/           # Static assets such as images, fonts, etc.
|   |-- components/       # Reusable React components
|   |-- constants/        # Holds application-wide constant values
|   |-- contexts/         # Manages global state in React components
|   |-- hooks/            # Custom React hooks
|   |-- pages/            # React components representing pages of the app
|   |-- services/         # Services for handling API calls, etc.
|   |-- styles/           # Global and theme styles
|   |-- App.jsx           # Main App component
|   |-- main.jsx          # Entry point for rendering the React app
|-- .env.example          # Example environment variables configuration
|-- package.json          # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the Learn Lingo App on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/learn-lingo.git

    cd learn-lingo
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up environment variables:

    ```bash
    cp .env.example .env
    # open .env and adjust the values according to your config
    ```

    ```bash
    # API key for Firebase authentication
    VITE_FIREBASE_API_KEY=

    # Domain for Firebase authentication
    VITE_FIREBASE_AUTH_DOMAIN=

    # URL for the Firebase Realtime Database
    VITE_FIREBASE_DATABASE_URL=

    # ID for the Firebase project
    VITE_FIREBASE_PROJECT_ID=

    # Storage bucket for Firebase
    VITE_FIREBASE_STORAGE_BUCKET=

    #  ID for sending messages via Firebase
    VITE_FIREBASE_MESSAGING_SENDER_ID=

    # ID for the Firebase application
    VITE_FIREBASE_APP_ID=
    ```

### Run the application:

1. Run app using following command:

   ```bash
   npm run dev
   ```
