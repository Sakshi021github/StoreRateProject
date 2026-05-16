

## Project Overview

StoreRate is a full-stack web application where users can register, login, browse stores, and submit ratings. 
Store owners can view ratings and average ratings for their assigned stores through a dedicated Owner Dashboard.

The project demonstrates:

* JWT Authentication
* Protected Routes
* Role-based Functionality
* REST APIs
* MySQL Database Integration
* React Frontend
* Express Backend



# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js

## Database

* MySQL



# Features

## Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Frontend Routes
* Logout Functionality

## Dashboard

* Total Stores Count
* Total Ratings Count
* Total Users Count
* Add New Stores
* Delete Stores
* Assign Store Owners

## Stores Module

* View All Stores
* Search Stores
* Submit Ratings
* View Average Ratings
* View Personal Ratings

## Store Owner Dashboard

* View Assigned Stores
* View Users Who Rated Stores
* View User Emails
* View Ratings Submitted
* View Average Ratings


# Folder Structure


frontend/
 ├── src/
 │    ├── pages/
 │    ├── components/
 │    ├── App.jsx
 │    └── main.jsx

backend/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── config/
 ├── server.js
 └── package.json




# Installation Guide

## Step 1 - Clone Repository


git clone <repository-url>




## Step 2 - Install Frontend Dependencies


cd frontend
npm install



## Step 3 - Install Backend Dependencies


cd backend
npm install




# MySQL Database Setup

## Create Database

sql
CREATE DATABASE store_rating_app;




## Configure Database

Update database configuration inside:


backend/config/db.js

Example:

js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'store_rating_app'
});

module.exports = db;




# Run Project

## Start Backend

bash
cd backend
npm start


Backend runs on:

bash
http://localhost:5000




## Start Frontend

bash
cd frontend
npm run dev


Frontend runs on:

bash
http://localhost:5173




# API Routes

## Authentication

### Register

bash
POST /api/auth/register


### Login

bash
POST /api/auth/login




## Stores

### Get Stores

bash
GET /api/stores


### Add Store

bash
POST /api/stores


### Delete Store

bash
DELETE /api/stores/:id


## Ratings

### Submit Rating

bash
POST /api/ratings




## Owner Dashboard

### Get Owner Ratings

bash
GET /api/owner/dashboard



# Demo Credentials

## Admin / Owner

text
Email: shahug@gmail.com
Password: Password@123


## User

text
Email: sakshi123@gmail.com
Password: Password@123




# Project Screenshots

Add screenshots for:

<img width="1596" height="757" alt="store1" src="https://github.com/user-attachments/assets/7b18f091-5a08-4fda-8064-0b2ee9033d60" />


 <img width="1334" height="825" alt="register1" src="https://github.com/user-attachments/assets/94b63c46-45ad-44df-91f1-8aa99b6dff1b" />
  <img width="905" height="828" alt="register2" src="https://github.com/user-attachments/assets/bc025d89-7bfb-4e83-9916-ac36379cf8c3" />


  
 <img width="1808" height="879" alt="store3" src="https://github.com/user-attachments/assets/2951d6b3-570a-431f-8426-ade973b3864f" />
  <img width="1682" height="638" alt="store4" src="https://github.com/user-attachments/assets/4e07ebd7-e28b-40de-994e-0bc6d0712d84" />


   <img width="1829" height="918" alt="store5" src="https://github.com/user-attachments/assets/26a6b386-536b-4ed3-99f3-e9f7091e5f14" />


   <img width="1778" height="869" alt="store6" src="https://github.com/user-attachments/assets/2c0d8829-8e0a-4966-9ff8-fd6286b51aa5" />




 <img width="1755" height="734" alt="storeimg1" src="https://github.com/user-attachments/assets/3640863d-e548-4434-ac8b-9141f28dfd79" />

  <img width="1798" height="742" alt="storeimg2" src="https://github.com/user-attachments/assets/e788e494-049c-4140-aed9-72e0288d4b48" />
  <img width="1429" height="661" alt="storeimg4" src="https://github.com/user-attachments/assets/a7145a82-cce4-48b2-874a-24425b00989e" />


  <img width="1428" height="902" alt="storeimg3" src="https://github.com/user-attachments/assets/b4bd599a-4a0f-44c8-94f2-aba247735f9c" />



  
 <img width="1814" height="821" alt="store7" src="https://github.com/user-attachments/assets/9fa10cc7-3bf7-41ed-9a17-5fdb1189edb4" />

  <img width="1786" height="656" alt="store8" src="https://github.com/user-attachments/assets/f99ba883-095b-4d41-91a9-034dde152dbd" />





# Future Enhancements

* Charts & Analytics
* Role-based Login Redirection
* Store Reviews & Comments
* Deployment on Vercel & Render
* Responsive Mobile UI Improvements



# Learning Outcomes

This project helped in understanding:

* Full Stack Development
* REST API Development
* JWT Authentication
* MySQL Relationships
* SQL Joins & Aggregations
* Protected Routes
* State Management in React
* Frontend & Backend Integration

# Deployment
https://storerateplatformfrontend.netlify.app/


# Author

Sakshi Sankhe


