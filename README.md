# API project with JWT Authentication(Books API)
In this repo I show you how I made a little ecommerce API with authentication and authorization system using JWT .
This API provide you to sell online and allows you to make CRUD actions according to the REST structure. So you can create,display,update and delete if you are authenticated!
After creating account you receive token in the response header that you can use after to access routes that require to be logged

## Database structure
I use a mongoDB database with the npm package named Mongoose

### Collections
I need to store users ,products, Orders, and carts content

* usersCollection
    1. username
    2. email
    3. password
* prductsCollection
    1. title
    2. desc
    3. img
    4. categories
    5. size
    6. color
    7. price
    8. instock

 

## API End Points

| Verb  | Url              | Actions                                           |
|-------|------------------|---------------------------------------------------|
| GET   |        |  |
| POST   | /   |  |
