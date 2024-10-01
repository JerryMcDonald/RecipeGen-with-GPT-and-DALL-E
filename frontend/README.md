# RecipeGen Frontend

Welcome to RecipeGen Frontend, a modern, responsive web application that helps you generate detailed and coherent recipes. This application is built using the power of React.js and connects to a backend service for data processing.

## Features

- Generate random recipes
- User-friendly and intuitive design
- Powered by React and Material-UI for a seamless, responsive experience

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

1. [Node.js](https://nodejs.org/en/)
2. npm (Node Package Manager, it comes with Node.js)

If you do not have these installed:

1. Navigate to the [official Node.js website](https://nodejs.org/en/). Here, you'll see download options for the latest Node.js version. Download the one appropriate for your system (Windows, Mac, Linux).

2. Once downloaded, run the installer and follow the prompts to install Node.js and npm.

3. To verify the installation, open your terminal and run:
```bash
node --version
npm --version
```
If the Node.js and npm versions are displayed, you've successfully installed Node.js and npm.

## Installation and Setup

### Step 1: Clone the Repository

In your terminal, run:

```bash
git clone https://github.com/username/RecipeGen.git
```
Replace `username` with your GitHub username.

### Step 2: Install Dependencies

Navigate into the cloned repository and install the required dependencies:

```bash
cd RecipeGen/frontend
npm install
```

### Step 3: Configure the Environment Variables

Create a `.env` file in the root of your project folder and add the following line:

```bash
REACT_APP_API_BASE_URL=http://localhost:5000/
```

This tells your application the URL of your backend API.

### Step 4: Start the Application

You're all set! Start the application by running:

```bash
npm run start
```

Your application will now be running on [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are always welcome. If you find a bug or have a feature request, feel free to open an issue or submit a pull request.
