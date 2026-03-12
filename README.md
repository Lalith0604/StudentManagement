# Student Management CURD API (NestJS) BACKEND

Name : M LALITH KUMAR

Phome no: 7680050845

## Overview

This project is a **Student Management Backend API** built using **NestJS** and **TypeScript**.
The API allows users to perform **CRUD operations (Create, Read, Update, Delete)** on student records.

The application follows the standard **NestJS architecture**:

```
Controller → Service → Model
```

All data is stored **in memory (no database)**, making the project lightweight and suitable for frontend integration or assignment purposes.

---

# Features

* Create a new student
* Retrieve all students
* Retrieve a single student by ID
* Update student details
* Delete a student
* DTO validation for request data
* Modular NestJS architecture
* RESTful API design

---

# Tech Stack

* Node.js
* NestJS
* TypeScript
* class-validator
* class-transformer

---

# Project Architecture

```
src
│
├── students
│   ├── dto
│   │   ├── create-student.dto.ts
│   │   └── update-student.dto.ts
│   │
│   ├── student.model.ts
│   ├── students.controller.ts
│   ├── students.service.ts
│   └── students.module.ts
│
├── app.module.ts
└── main.ts
```

### Controller

Handles incoming HTTP requests and sends responses.

### Service

Contains the business logic and manages the in-memory student data.

### Model

Defines the structure of a student object.

### DTO

Validates request data before processing.

---

# Student Model

Each student contains the following fields:

| Field | Type   | Description       |
| ----- | ------ | ----------------- |
| id    | number | Unique student ID |
| name  | string | Student name      |
| email | string | Student email     |
| age   | number | Student age       |

Example Student Object:

```json
{
"id": 1,
"name": "Rahul Sharma",
"email": "rahul@email.com",
"age": 22
}
```

---

# Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/student-crud-nestjs.git
```

Navigate to the project directory:

```
cd student-crud-nestjs
```

Install dependencies:

```
npm install
```

---

# Running the Application

Start the development server:

```
npm run start:dev
```

The API will run at:

```
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | /students     | Retrieve all students    |
| GET    | /students/:id | Retrieve a student by ID |
| POST   | /students     | Create a new student     |
| PUT    | /students/:id | Update a student         |
| DELETE | /students/:id | Delete a student         |

---

# Example Requests

## Create Student

POST `/students`

Request Body:

```json
{
"name": "Lalith Kumar",
"email": "lalith@email.com",
"age": 23
}
```

Response:

```json
{
"id": 3,
"name": "Lalith Kumar",
"email": "lalith@email.com",
"age": 23
}
```

---

# Test Cases

The following test cases verify the functionality of the API.

---

## Test Case 1 — Get All Students

**Request**

```
GET /students
```

**Expected Result**

* Returns a list of all students
* Status Code: **200**

---

## Test Case 2 — Create Student

**Request**

```
POST /students
```

Body:

```json
{
"name": "John Doe",
"email": "john@email.com",
"age": 20
}
```

**Expected Result**

* Student is created
* Unique ID is generated
* Status Code: **201**

---

## Test Case 3 — Get Student by ID

**Request**

```
GET /students/1
```

**Expected Result**

* Returns student with ID 1
* Status Code: **200**

---

## Test Case 4 — Update Student

**Request**

```
PUT /students/1
```

Body:

```json
{
"name": "John Updated",
"age": 21
}
```

**Expected Result**

* Student record is updated
* Status Code: **200**

---

## Test Case 5 — Delete Student

**Request**

```
DELETE /students/1
```

**Expected Result**

* Student removed from list
* Status Code: **200**

---

## Test Case 6 — Invalid Email Validation

**Request**

```
POST /students
```

Body:

```json
{
"name": "Invalid User",
"email": "invalid-email",
"age": 22
}
```

**Expected Result**

* Validation error returned
* Status Code: **400**

---

# Important Notes

* The application stores data **in memory**.
* Data will reset whenever the server restarts.
* This implementation is designed for **learning purposes and frontend testing**.

---

# Future Improvements

Possible enhancements:

* Add PostgreSQL database integration
* Add authentication (JWT)
* Add Swagger API documentation
* Add pagination and filtering
* Deploy the backend using Docker


