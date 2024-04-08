*** Settings ***
Library    RequestsLibrary
Library    String

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchShoppingCart

*** Test Cases ***
Test Fetch Seller ID Successfully
    [Documentation]    Test fetching profile picture successfully when user exists
    Create Session    shoppingCart    ${BASE_URL}
    ${response}=    GET On Session    shoppingCart    /    params=user=pansaar1553
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    products
    Should Contain    ${response_body}    id
    Should Contain    ${response_body}    name
    Should Contain    ${response_body}    description
    Should Contain    ${response_body}    price
    Should Contain    ${response_body}    image
    Should Contain    ${response_body}    sellerId
    Should Contain    ${response_body}    amount
    Should Contain    ${response_body}    updatedAt
    Should Contain    ${response_body}    category
    Should Contain    ${response_body}    prodAmount

Test Fetch Seller ID Not Found
    [Documentation]    Test fetching profile picture when user is not found
    Create Session    shoppingCart    ${BASE_URL}
    ${response}=    Get Request    shoppingCart    /    params=user=nonexistentuser
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found