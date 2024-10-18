# MERN Stack Project: Build a Modern Real Estate Marketplace with react MERN (jwt, redux toolkit)

<https://www.youtube.com/watch?v=VAaUy_Moivw>

React & Next js Projects with Sahand

## Create client frontend

    npm create vite@latest client
    cd client
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm run dev

## Create backend (api)

    create directory api
    in root directory mern-state
        npm init -y
        npm i express
        npm install bcryptjs
        node api/index.js
        npm install nodemon
        npm install jsonwebtoken
        npm run dev
    
    database package
        npm i mongoose
        mongodb+srv://changeuser:changepass@mern-state.q80kk.mongodb.net/?retryWrites=true&w=majority&appName=mern-state
    
    access to environment variables
        npm install dotenv

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
