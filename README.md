# Task Manager App
## Screenshot
![image](https://github.com/gitbiruk2010/Open-Ended-Project-with-React-Expo-and-NestJS/assets/103274295/cd8b35ab-d7fd-41fc-9d98-ea05e4d3604d)



## Overview

The Task Manager App is a full-stack application designed to help users manage their tasks efficiently. It utilizes React Expo for the frontend and NestJS for the backend, with a MySQL database for storing task data.

## Features

- **Task Creation**: Users can add new tasks with descriptions.
- **Task Viewing**: Users can view all tasks in a list.
- **Task Updating**: Tasks can be edited and updated.
- **Task Deletion**: Users can delete tasks they no longer need.

## Tech Stack

- **Frontend**: React Expo
- **Backend**: NestJS
- **Database**: MySQL

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Backend Setup

1. **Clone the repository**:
   
   git clone https://github.com/gitbiruk2010/Open-Ended-Project-with-React-Expo-and-NestJS
   cd backend
## Install dependencies:

npm install

## Database Setup:

    Ensure MySQL is installed and running on your system.
    Create a database named task_manager.
    Configure your database credentials in the ormconfig.json or via environment variables.

## Start the server
  npm start

## Frontend Setup
  Navigate to the frontend directory:  cd frontend
  Install dependencies: npm install
 
  Environment Setup:

    Create a .env file in the root of the frontend directory.
    Add the backend server URL: REACT_APP_API_BASE_URL=http://localhost:3000  --> replace 'localhost' with your actual ip address you're using on the backend.
    Start the application: npm start
