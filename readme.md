# CRUDify: A Simple Express.js App

CRUDify is a lightweight CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express.js**, and **EJS** for templating. It allows users to create, view, edit, and delete posts in a Quora-like format.

## Features

- Create, Read, Update, and Delete posts
- Dynamic UI using EJS templating
- Uses **Express.js** for backend routing
- Bootstrap for responsive design
- UUID for unique post identification
- Method override for handling PUT & DELETE requests

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, EJS, Bootstrap
- **Dependencies:**
  - express
  - ejs
  - method-override
  - uuid

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/CyberHunter8857/CRUDify-A-Simple-Express.js-App.git
   cd CRUDify-Express
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   node index.js
   ```
4. Open your browser and go to:
   ```sh
   http://localhost:8080
   ```

## Project Structure

```
CRUDify-Express/
│── views/            # EJS templates
│── public/           # Static assets (CSS, images)
│── index.js          # Main server file
│── package.json      # Project metadata & dependencies
│── package-lock.json # Lock file for package versions
│── node_modules/     # Installed dependencies
```

## Usage

- **Create a post:** Click on 'Create Post' and submit the form.
- **View a post:** Click on 'View Post' to see full details.
- **Edit a post:** Click 'Edit Post' and modify content.
- **Delete a post:** Click 'Delete Post' to remove it permanently.

## Screenshots

Here are some screenshots of the application:

![Homepage](public/images/Screenshot%201.png)
![Create Post](public/images/Screenshot%202.png)
![Edit Post](public/images/Screenshot%203.png)
![View Post](public/images/Screenshot%204.png)

(Replace `path/to/...` with actual image paths after uploading screenshots to your repository.)

## Contributing

Feel free to fork the repository and submit a pull request with improvements!

## License

This project is licensed under the MIT License.

---

🚀 **CRUDify - Simplifying Content Management!**

