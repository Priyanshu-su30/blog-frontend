# DAILYBLOG

A full-stack web application that allows users to create accounts, post blogs with images, and engage with content. Built with React, Node.js, and MongoDB.

👉 Live Demo: <a href='https://priyanshu-dailyblog.netlify.app'>DailyBlog</a>

![dailyblog](https://github.com/user-attachments/assets/3c394fe0-d7db-4b82-844d-3ff61c636694)


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Getting Started with Create React App](#getting-Started-with-Create-React-App)
- [Available Scripts](#available-Scripts)
- [License](#license)

## Features

- User authentication and authorization
- Create, edit, and delete blog posts
- Upload and manage images with blog posts
- Responsive design for various devices
- Data validation and error handling

## Tech Stack

- **Front-End**: React, CSS, HTML
- **Back-End**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git, GitHub

## Installation

### Prerequisites

- Node.js (v12 or higher)
- MongoDB

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/blogging-platform.git
   cd blogging-platform
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:
   ```
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

4. **Run the application:**

   In the root directory:
   ```sh
   npm run dev
   ```

5. **Access the application:**

   Open your browser and go to `http://localhost:3000`

## Usage

1. **Register an account:**
   - Click on the "Sign Up" button and fill in the required details.

2. **Log in:**
   - Use your registered email and password to log in.

3. **Create a blog post:**
   - Click on "Create Post" and fill in the title, content, and upload an image.

4. **Edit or delete a blog post:**
   - Go to your profile, select a post, and choose to edit or delete it.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository:**
   - Click the "Fork" button on GitHub.

2. **Clone your fork:**
   ```sh
   git clone https://github.com/yourusername/blogging-platform.git
   ```

3. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```

4. **Make your changes and commit them:**
   ```sh
   git commit -m "Describe your changes"
   ```

5. **Push to your fork:**
   ```sh
   git push origin feature-branch
   ```

6. **Create a pull request:**
   - Go to the original repository and create a pull request with a description of your changes.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to replace placeholders like `yourusername` and `your-mongodb-uri` with your actual information. Let me know if you need any additional customization!



