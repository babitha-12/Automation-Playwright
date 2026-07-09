Feature:Inventory page
    Scenario:Verify inventory items count for different users
        Given User is on application login page
        When user logs in with username "<username>" and password "<password>"
        Then user should see result "<result>"
        And Inventory item count should be count "<count>"
        Examples:
            | username        | password     | result         | count |
            | standard_user   | secret_sauce | inventory page | 6     |
            | problem_user    | secret_sauce | inventory page | 6     |
            | locked_out_user | secret_sauce | error message  | 0     |



