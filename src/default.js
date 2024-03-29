import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

export const markDownDefault = `
# Markdown Application

The Markdown App is a simple app which helps write documentation. You can make changes in editor and see the results live on your screen.

# Hi, I'm Thanos! 👋


## 🚀 About Me
I'm a frontend developer...

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://thanosdev.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thanos-trentsios/)

## Tech Stack

**HTML, CSS, React**

## Features

- Responsive design
- Live previews
- Elegant appearance

# How to use

Clone or download repo NodeJS / NPM / Yarn should be installed in your PC

Open terminal or Git for Windows (Git Bash) Run these commands:

## Install Dependencies
> npm install or yarn install

## Run App
> npm start or yarn start

## Feedback

If you have any feedback, please reach out to me at thanostrentsios103@gmail.com

`;
