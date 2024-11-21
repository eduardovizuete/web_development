# MERN Stack Project: Build a Modern Real Estate Marketplace with react MERN (jwt, redux toolkit)

<https://www.youtube.com/watch?v=VAaUy_Moivw>

Source code Git:
https://github.com/sahandghavidel/mern-estate

React & Next js Projects with Sahand

## Create client frontend

    npm create vite@latest client
    cd client
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm run dev
    - Install Redux Toolkit and React-Redux
    npm install @reduxjs/toolkit react-redux
    - Persist
    npm install redux-persist
    - Firebase
    npm install firebase
    - Swiper: modern mobile touch slider 
    npm install swiper
    - @tailwindcss/line-clamp: A plugin that provides utilities for visually truncating text after a fixed number of lines.
    npm install -D @tailwindcss/line-clamp

## Create backend (api)

    create directory api
    in root directory mern-state
    
        $ npm init -y

        - Fast, unopinionated, minimalist web framework for Node.js.
            $ npm i express
        
        - Database Mongoose MongoDB ODM (object-document mapper)
            $ npm i mongoose
                mongodb+srv://changeuser:changepass@mern-state.q80kk.mongodb.net/?retryWrites=true&w=majority&appName=mern-state
    
        - Loads environment variables from .env file
            $ npm install dotenv
        
        - Optimized bcrypt in plain JavaScript with zero dependencies. Compatible to 'bcrypt'.
            $ npm install bcryptjs
        
        - Simple monitor script for use during development of a Node.js app
            $ npm install nodemon
        
        - libreria json web token
            $ npm install jsonwebtoken

        - Parse Cookie header and populate req.cookies with an object keyed by the cookie names
            $ npm install cookie-parser
        
        - run application
            $ node api/index.js
            $ npm run dev
        
        
    
    

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
