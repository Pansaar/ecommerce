*** Settings ***
Library    OperatingSystem
Library    RequestsLibrary
Library    Collections
Library    BuiltIn

*** Variables ***
${BASE_URL}    http://localhost:3000/api/homeProducts

*** Test Cases ***
Test GET Request to /api/products Endpoint 200
    [Documentation]    Test GET request to /api/products endpoint
    Create Session    API    ${BASE_URL}
    ${response}=    GET    ${BASE_URL}    
    Should Be Equal As Numbers    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    id
    Should Contain    ${response_body}    name
    Should Contain    ${response_body}    price
    Should Contain    ${response_body}    amount
    Should Contain    ${response_body}    image