# Email Verification with Nodemailer

<img align="right" src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="100"/>

[![GitHub last commit](https://img.shields.io/github/last-commit/Alexandrbig1/rest-api-goit-NodeJS)](https://github.com/Alexandrbig1/rest-api-goit-NodeJS/commits/main)
[![Node.js Version](https://img.shields.io/badge/Node.js-v18.18.0-2B8B27)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/Express.js-v4.18.2-000000)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.3.0-3B9539)](https://www.mongodb.com/)
[![Mongoose Version](https://img.shields.io/badge/Mongoose-v8.0.3-6B0002)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JSON%20Web%20Token-v9.0.2-000000)](https://jwt.io/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-v6.9.8-0076C8)](https://nodemailer.com/)

The sixth homework assignment marks a pivotal advancement in our ongoing project, seamlessly building upon the foundations established in prior modules. In this iteration, we introduce a critically important feature—email verification—leveraging the robust capabilities of the Nodemailer API. This module is meticulously crafted with a singular focus: to fortify user security and elevate the precision of access control mechanisms within our application.

## Homework6: Email Verification with Nodemailer

The sixth homework assignment builds upon prior projects, introduces a crucial feature—email verification using the Nodemailer API. This module is dedicated to fortifying user security and refining access control within our application.

## API Endpoints

### Contact endpoints

- **(GET) `/api/contacts`:** Retrieve a list of all contacts.
- **(GET) `/api/contacts/`:contactId:** Retrieve a specific contact by ID.
- **(POST) `/api/contacts`:** Add a new contact to the list.
- **(PUT) `/api/contacts/`:contactId:** Update an existing contact's information.
- **(PATCH) `/api/contacts/`:contactId/favorite:** Partially update an existing contact's information.
- **(DELETE) `/api/contacts/`:contactId:** Delete an existing contact from the list.

### User endpoints

- **(POST) `/api/users/signup`:** Register a new user.
- **(POST) `/api/users/signin`:** Login and obtain a JWT.
- **(POST) `/api/users/logout`:** Logout the user.
- **(GET) `/api/users/current`:** Retrieve information about the currently logged-in user.
- **(PATCH) `/api/users/avatars`:** Change the user's avatar.
- **(GET) `/api/users/verify/:verificationToken`:** Verify the user's email address using the provided token.
- **(POST) `/api/users/verify`:** Request a second verification email.

### Additional Endpoints

- **(GET) `/api/contacts?page=<page_number>&limit=<page_size>`:** Retrieve paginated contacts.
- **(GET) `/api/contacts?favorite=true`:** Retrieve contacts marked as favorites.
- **(PATCH) `/api/users`:** Update the user's subscription level.

## Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white): The runtime environment for executing the application.
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white): A NoSQL database for data persistence.
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=mongoose&logoColor=white): An ODM (Object Data Modeling) library for MongoDB and Node.js.
- ![JSON Web Token](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white): Used for user authentication.
- ![Express.js](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white): A web application framework for building RESTful APIs.
- ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white): Data interchange format used in the project.
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-0076C8.svg?style=for-the-badge&logo=nodemailer&logoColor=white): Email sending module for Node.js.

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/Alexandrbig1/rest-api-goit-NodeJS/issues).

## Feedback

I welcome feedback and suggestions from users to improve the application's functionality and user experience.

## Acknowledgments

Big thanks to [@GoIT](https://goit.global/us/) for their valuable guidance and support during the completion of the 5th Node.js homework.

## Languages and Tools:

<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
<a href="https://www.jestjs.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jest.svg" alt="Jest" height="50" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
<a href="https://postman.com" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/></a>
</div>

## Connect with me:

<div align="center">
<a href="https://linkedin.com/in/alex-smagin29" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://github.com/alexandrbig1" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://discord.gg/uzM3UNQU" target="_blank">
<img src="https://img.shields.io/badge/discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="Discord" style="margin-bottom: 5px;" />
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
<a href="https://www.upwork.com/freelancers/~0117da9f9f588056d2" target="_blank">
<img src="https://img.shields.io/badge/upwork-%230077B5.svg?&style=for-the-badge&logo=upwork&logoColor=white&color=%23167B02" alt="Upwork" style="margin-bottom: 5px;" />
</a>
</div>
