1. CRUD

No login
-CREATE Customer
-CREATE Admin

Customer
-READ order so far
-ADD Food to order cart
-DELETE Food in order cart
-READ list of Food

Admin
-CREATE new Food item
-UPDATE Food
-DELETE customer/other admin
-DELETE Food
-READ list of Food
-READ list of Customers

2. Class + Instance Method

-

3. Many to Many

- Create Association between Users and Food table

4. Helper

-


5. Hooks

- Display price in currency during "checkout"

6. Middleware

- when no one is logged in: Can only access register page
- when customer is logged in: can access "add food to cart", "checkout" page
- when admin is logged in: can access "Add/Edit/Delete Food", "Delete User"

7. Session

- when user is logged in adn adding food to cart: create new proerty "cart" as array of object to store food information

8. MVP

- be able to see "Popular Food"
- be able to see food based on category

9. Heroku

10. Partials

-header
-footer

11. Encrypt

- make sure password stored is encrypted

