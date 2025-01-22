# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# RegisterKaro

RegisterKaro is a React application built with Vite. It provides a platform for businesses to manage their compliance needs efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/kishanp12395/registerkaro
    ```
2. Navigate to the project directory:
    ```sh
    cd registerkaro
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev

## Project Structure

registerKaro/
    .gitignore
    eslint.config.js
    index.html
    package.json
    public/
    README.md
    src/
        App.css
        App.jsx
        components/
            company/
                CompanyPage.jsx
            HeroPage.jsx
            MainNavbar.jsx
            TopNavbar.jsx
        index.css
        main.jsx
    vite.config.js

## Available Scripts  

npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run preview: Previews the production build.
npm run lint: Lints the project.

## Dependencies
react: ^18.3.1
react-dom: ^18.3.1
react-icons: ^5.4.0
DevDependencies
@eslint/js: ^9.17.0
@types/react: ^18.3.18
@types/react-dom: ^18.3.5
@vitejs/plugin-react-swc: ^3.5.0
eslint: ^9.17.0
eslint-plugin-react: ^7.37.2