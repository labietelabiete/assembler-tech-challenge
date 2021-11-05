`#html` `#css` `#js` `#node` `#mongoDB` `#express` `#react` `#node` `#monorepo`

# Assembler tech challenge 👨‍💻<!-- omit in toc -->

This project is a technical challenge by Assembler to create a Gif platform which users can upload and share their gifs with everyone.

It has been developed using _MERN_ Stack, _React_ for Frontend, and _MongoDB_, _Express_ and _Node_ for _Backend_, and media content is uploaded on _Cloudinary_ services.

# Table of contents <!-- omit in toc -->

- [Project functionalities](#project-functionalities)
    - [Requirements:](#requirements)
- [🚀 Getting Started](#-getting-started)
  - [System requirements 📋](#system-requirements-)
  - [Installation 🔧](#installation-)
  - [App navigation 🧭](#app-navigation-)
- [🕵️‍♂️ Resources](#️️-resources)
  - [Main resources 🧬](#main-resources-)
  - [Support libraries 📚](#support-libraries-)
  - [Wishlist ✨](#wishlist-)

# Project functionalities

The **main functionalities** are detailed below:

- **Login** and **registration**
- **Home page** that will show the **content uploaded** by users
- **Main Navbar** that will include:
  - **Content search bar**:
    - You will have at least **three options** to filter the **main content**
  - **Links** to the **main categories**
  - **Information** of the **logged in user**
    - If you are not logged in, the **button** to log in will be **displayed**
- **Upload content page**
  - If the user is logged in, a **multimedia resource** can be **uploaded** from their **computer** or from a an **external link**
- **Page** of the **selected multimedia** element:
  - The **user can obtain the link** of the **multimedia resource** to include it on any **website**

### Requirements:

- Use at least **one third-party API**
- Use at least **one third-party library**
- Creation of your own **database** to **store** all the **information**
- **Anyone can access the website** and **view** the **content** of other **users**, but only **previously registered** users **can upload multimedia content**

# 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## System requirements 📋

You need to have [NodeJs](https://nodejs.org/) installed to run the backend .
Install Yarn globally: `npm install --global yarn`
Once you have installed these programs, you need to create account for: - [Cloudinary](https://cloudinary.com/) - [MongoDB Atlas](https://www.mongodb.com/)

## Installation 🔧

First, you will need to `clone` or `fork` the repository into your Github account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

`$ git clone https://github.com/labietelabiete/assembler-tech-challenge`

Then run yarn install in the base folder `yarn install`

When you have all the dependencies installed you need to create two .env files, one located in client folder and one in server folder.

The client .env file need to contain the next variables:

```
# Giphy settings
REACT_APP_GIPHY_API_KEY= "ETYf98tQY7zbX0UTHAsmjqR8RfvQWV2R"
```

The server .env file need to contain the next variables:

```
# MongoDB settings
MONGO_DB_URL=mongodb+srv://db-tech-challenge:taqvegr1UP3QyA0W@cluster0.xgrfa.mongodb.net/tech-challenge
# Server settings
PORT=4000
# Cloudinary settings
CLOUDINARY_API_KEY= "843852688886536"
CLOUDINARY_API_SECRET= "ELcf_UKJv9xFNt3IrtDN_S-1_0A"
CLOUDINARY_NAME= "dz5nspe7f"
```

## App navigation 🧭

- Home Page
- Upload content
- Search
- Sign in
- Sign up

# 🕵️‍♂️ Resources

## Main resources 🧬

- [Axios](https://axios-http.com/docs/intro)
- [Bootstrap](https://getbootstrap.com/)
- [Cloudinary](https://cloudinary.com/)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node JS](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [React Redux](https://es.redux.js.org/)
- [React Router](https://github.com/remix-run/react-router)
- [SASS](https://sass-lang.com/)

## Support libraries 📚

- [Formik](https://github.com/formium/formik)
- [Multer](https://github.com/expressjs/multer)
- [Nodemon](https://nodemon.io/)
- [Validator](https://github.com/validatorjs/validator.js/)
- [Yup](https://github.com/jquense/yup)

## Wishlist ✨

- Update uploaded gifs
- User view
