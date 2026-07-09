Feature:Login functionality
Scenario:Succesfull Login
Given the user is on the login page
When the user enters username "standard_user" and password "secretsauce"
And clicks the login button
Then the inventory page should be displayed