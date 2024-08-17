# E-Commerce Phone world Product Filtering & Sorting SPA (Frontend)

This project is a Single Page Application (SPA) built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The frontend enables users to interact with various functionalities such as pagination, searching, categorization, and sorting of products. It also incorporates user authentication via Firebase.

[## Live Link ](https://phone-world-bd.web.app/)
## server code (https://github.com/AmirHossain58/phone-world-server.git)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Additional Notes](#additional-notes)

## Project Overview

This project focuses on creating a responsive e-commerce website where users can efficiently search, filter, and sort products. The application is designed to be intuitive and user-friendly, with robust features such as product categorization and Google authentication.

## Features

### 1. Setup and Basic Structure
- The frontend is built using React.js and interacts with a backend built using Express.js and Node.js.
- APIs are structured to fetch product data from a MongoDB database.

### 2. Pagination
- Pagination is implemented to efficiently load and display products.
- Navigation buttons for `Next` and `Previous` pages are available.

### 3. Searching
- A search bar allows users to search for products by name.

### 4. Categorization
- Users can filter products based on:
  - Brand Name
  - Category Name
  - Price Range
- Multiple filters can be used simultaneously.

### 5. Sorting
- Products can be sorted by:
  - Price: Low to High, High to Low
  - Date Added: Newest first

### 6. Authentication
- Google Authentication via Firebase.
- Email and Password Authentication via Firebase.

### 7. UI Instructions
- Mobile-first responsive design.
- Product cards with fixed sizes for concise product information.
- A Navbar with the website name/logo and relevant routes.
- A Footer containing necessary links and information.


## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for backend)
- Firebase account for Authentication

### Configure the environment variables:

Create a .env file at the root of the project.
Add the necessary Firebase environment variables.

### FIREBASE
VITE_apiKey=api_key
VITE_authDomain=auth_domain
VITE_appId=app_id
VITE_projectId=project_id
VITE_storageBucket=storage_bucket
VITE_messagingSenderId=messaging_sender_id
### imgBb
VITE_IMGBB_API_KEY= IMGBB_API_KEY

VITE_API_URL=http://localhost:8000


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AmirHossain58/phone-world.git
   cd phone-world
   npm install
   npm run dev
