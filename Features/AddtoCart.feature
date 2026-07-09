Feature:Add to cart functionality
Scenario:Succesfull Login and add to cart
Given the user is on the login screen
When the user needs to login with username "standard_user" and password "secret_sauce"
And on user the clicks the login button
Then the succesfull inventory page should be displayed
Then the user wants to add Sauce Labs Backpack to cart
Then the user wants to add Sauce Labs Bike Light to cart
Then the user needs to confirm that the cart badge is showing as count "2"