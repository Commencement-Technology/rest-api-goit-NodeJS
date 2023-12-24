# Node.js, MongoDB, Mongoose, and JWT Authentication with Extended Contact Management
<img align="right" src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="100"/>

[![GitHub last commit](https://img.shields.io/github/last-commit/Alexandrbig1/rest-api-goit-NodeJS)](https://github.com/Alexandrbig1/rest-api-goit-NodeJS/commits/main)
[![Node.js Version](https://img.shields.io/badge/Node.js-v18.18.0-green)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/Express.js-v4.18.2-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.3.0-brightgreen)](https://www.mongodb.com/)
[![Mongoose Version](https://img.shields.io/badge/Mongoose-v8.0.3-brightgreen)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JSON%20Web%20Token-v9.0.2-brightgreen)](https://jwt.io/)

## Homework4: Node.js, MongoDB, Mongoose, and JWT Authentication with Extended Contact Management

This is the fourth homework assignment in the Fullstack Bootcamp, building upon the previous projects that focused on HTTP requests, ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white) contact management, and ![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white) integration. This module introduces authentication with ![JSON Web Token](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white) (JWT) and enhances the contact management system with additional features.

### Contact Endpoints

- **Get All Contacts (GET):** Retrieve a list of all contacts.
- **Get Contact by ID (GET):** Retrieve a specific contact by its ID.
- **Add New Contact (POST):** Add a new contact to the list.
- **Update Existing Contact (PUT):** Update an existing contact's information.
- **Patch Existing Contact (PATCH):** Partially update an existing contact's information.
- **Delete Existing Contact (DELETE):** Remove an existing contact from the list.

### User Endpoints

- **Register a New User (POST):** Register a new user with email and password fields (required).
- **Login (POST):** Login and obtain a JSON Web Token (JWT) for authentication.
- **Logout (POST):** Logout the user.
- **Retrieve Current User Information (GET):** Retrieve information about the currently logged-in user.
- **Update User Subscription (PATCH):** Update the user's subscription level (options: 'starter', 'pro', 'business').

### Pagination and Filtering

- **Pagination (GET):** Retrieve paginated contacts.
- **Filter by Favorite (GET):** Retrieve contacts marked as favorites.

## Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white): The runtime environment for executing the application.
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white): A NoSQL database for data persistence.
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=mongoose&logoColor=white): An ODM (Object Data Modeling) library for MongoDB and Node.js.
- ![JSON Web Token](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white): Used for user authentication.
- ![Express.js](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white): A web application framework for building RESTful APIs.
- ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white): Data interchange format used in the project.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

## Requirements

- Node.js installed
- NPM (Node Package Manager) installed

## Installing

1. Clone the repository to your local machine.
    ``` bash
    git clone https://github.com/Alexandrbig1/nodejs-rest-api-homework.git
1. Navigate to the project folder.
    ``` bash
    cd nodejs-rest-api-homework
1. Install dependencies.
    ``` bash
    npm install

## Running the Application
- **Production Mode:**
    ``` bash
    npm start
- **Development Mode with Nodemon:**
    ``` bash
    npm run dev
    
## API Endpoints

### Contact endpoints

- **GET /api/contacts:** Retrieve all contacts.
- **GET /api/contacts/:contactId:** Retrieve a specific contact by ID.
- **POST /api/contacts:** Add a new contact.
- **PUT /api/contacts/:contactId:** Update an existing contact.
- **PATCH /api/contacts/:contactId/favorite:** Partially update an existing contact's information.
- **DELETE /api/contacts/:contactId:** Delete an existing contact.
- **Pagination:**
   - `GET /api/contacts?page=<page_number>&limit=<page_size>` - Retrieve paginated contacts.
- **Filter by Favorite:**
   - `GET /api/contacts?favorite=true` - Retrieve contacts marked as favorites.

### User endpoints

- **POST /api/users/register:** Register a new user with email and password fields (required).
- **POST /api/users/login:** Login and obtain a JSON Web Token (JWT) for authentication.
- **POST /api/users/logout:** Logout the user.
- **GET /api/users/current:** Retrieve information about the currently logged-in user.
- **PATCH /api/users:** Update the user's subscription level (options: 'starter', 'pro', 'business').

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/Alexandrbig1/rest-api-goit-NodeJS/issues).

## Feedback

I welcome feedback and suggestions from users to improve the application's functionality and user experience.

## Acknowledgments

Big thanks to [@GoIT](https://goit.global/us/) for their valuable guidance and support during the completion of the 3rd Node.js homework. 

## Languages and Tools:

<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
</div>

## Connect with me:

<div align="center">
<a href="https://linkedin.com/in/alex-smagin29" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://github.com/alexandrbig1" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/22484161/alex-smagin" target="_blank">
<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
</a>
<a href="https://dribbble.com/Alexandrbig1" target="_blank">
<img src=https://img.shields.io/badge/dribbble-%23E45285.svg?&style=for-the-badge&logo=dribbble&logoColor=white alt=dribbble style="margin-bottom: 5px;" />
</a>
<a href="https://www.behance.net/a1126" target="_blank">
<img src=https://img.shields.io/badge/behance-%23191919.svg?&style=for-the-badge&logo=behance&logoColor=white alt=behance style="margin-bottom: 5px;" />
</a>  
</div>
