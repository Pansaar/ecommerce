*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchElectronics
*** Test Cases ***
Test Fetch Product Amount Successfully
    [Documentation]    Test fetching product amount successfully when user exists
    Create Session    electronicsSession    ${BASE_URL}
    ${response}=    GET On Session    electronicsSession    /
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    id
    Should Contain    ${response_body}    name
    Should Contain    ${response_body}    description
    Should Contain    ${response_body}    price
    Should Contain    ${response_body}    image




    



