# Blog Application

This is a blog application where users can register using Google, view and interact with posts, and search for specific posts. Admins have additional privileges, including managing comments and posts.

## Features

### User Features
- **Google Authentication:** Users can register and log in using their Google account.
- **View Posts:** Browse through a list of blog posts.
- **Comment on Posts:** Leave comments on any post.
- **Like Comments:** Show appreciation by liking comments.
- **Search Posts:** Use the filter method to search for specific posts by title or content.

### Admin Features
- **Manage Comments:** View, delete, and like comments left by users.
- **Create and Edit Posts:** Admins can create new posts and edit existing ones.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: Set up a MongoDB database.
- **Google OAuth Credentials**: Obtain Google OAuth credentials for user authentication.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/blog-application.git
    cd blog-application
    ```

2. **Install server dependencies:**
    ```bash
    npm install
    ```

3. **Navigate to the client directory and install dependencies:**
    ```bash
    cd client
    npm install
    ```

4. **Create a `.env` file in the root directory with the following variables:**
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

### Running the Application

1. **Development Mode:**
    ```bash
    npm run dev
    ```

2. **Production Build:**
    ```bash
    npm run build
    npm start
    ```

### Directory Structure
```plaintext
|-- api/
|   |-- index.js         # Entry point for the server
|   |-- models/          # Mongoose models
|   |-- routes/          # API routes
|
|-- client/
|   |-- src/
|       |-- components/  # React components
|       |-- pages/       # Application pages
|       |-- App.js       # Main React component
|   |-- public/          # Public assets
|
|-- .env                 # Environment variables
|-- package.json         # NPM scripts and dependencies
|-- README.md            # Project documentation
