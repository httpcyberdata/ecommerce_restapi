# Node.js E-Commerce App REST API with MongoDB (abandoned)
- Tutorial URL: https://www.youtube.com/watch?v=rMiRZ1iRC0A
- Tutorial description: Node MongoDB eCommerce Rest API using Stripe payment method. Node.js shopping API tutorial using express, MongoDB, and JWT for beginners. 

___________

### Software versions

### Problems in the project:
1.
2.

### How to use

API Endpoints
- api/auth/register 
    Register user account
    Send a raw JSON body w/ Content-Type application/json
    Ex:
    ```
        {
            "username": "test_user",
            "email": "test_user@gmail.com",
            "password": "testpass"
        }
    ```
    Returns status code 201 Created.
- api/auth/login
    Login to user account
    Send a Raw JSON Body w/ Content-Type application/json
    Ex: 
    ```
        {
            "username": "test_user",
            "password": "testpass
        }
    ```

### Photos of project:

### Apps used:

### Coding styles I used:

### What I learned
1. To use CryptoJS for password encryption instead of bcrypt.