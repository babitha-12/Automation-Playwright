Feature:Login functionality
@Login @smoke
Scenario:Succesfull Login
Given the user is on the login page
When the user enters username "standard_user" and password "secret_sauce"
And clicks the login button
Then the inventory page should be displayed