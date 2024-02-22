Feature: UUID

Get the UUID for the current client and connect to the API

Scenario: Get the UUID from the get param
Given there is a get param with a UUID value
When I check if the UUID corresponds to an existing connection
Then I take the UUID as my UUID for this client
And I call /api/connect

Scenario: Fallback to the generated UUID if the get param is invalid
Given there is a get param with a UUID value
But the UUID does not correspond to an existing connection
When I generate a new UUID
Then I redirect to the page without the get param
And I call /api/init

Scenario: Get the UUID from the sessionStorage
Given there is no get param
And there is a UUID in the sessionStorage
When I check if the UUID corresponds to an existing connection
Then I take the UUID as my UUID for this client
And I call /api/connect

Scenario: Fallback to the generated UUID if the sessionStorage is empty or invalid
Given there is no get param
And there is no UUID in the sessionStorage
Or the UUID in the sessionStorage does not correspond to an existing connection
When I generate a new UUID
Then I call /api/init

Scenario: Get the UUID from the get param and ignore the sessionStorage
Given there is a get param with a UUID value
And there is a UUID in the sessionStorage
When I check if the get param UUID corresponds to an existing connection
And the get param UUID is valid
Then I take the get param UUID as my UUID for this client
And I call /api/connect
And I ignore the sessionStorage UUID

Scenario: Get the UUID from the sessionStorage if the get param is invalid
Given there is a get param with a UUID value
And there is a UUID in the sessionStorage
When I check if the get param UUID corresponds to an existing connection
And the get param UUID is invalid
Then I check if the sessionStorage UUID corresponds to an existing connection
And the sessionStorage UUID is valid
Then I take the sessionStorage UUID as my UUID for this client
And I call /api/connect

Scenario: Fallback to the generated UUID if both the get param and the sessionStorage are invalid
Given there is a get param with a UUID value
And there is a UUID in the sessionStorage
When I check if the get param UUID corresponds to an existing connection
And the get param UUID is invalid
Then I check if the sessionStorage UUID corresponds to an existing connection
And the sessionStorage UUID is invalid
Then I generate a new UUID
And I redirect to the page without the get param
And I call /api/init
