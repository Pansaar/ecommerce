*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchEditMyMerchant

*** Test Cases ***
Test Fetch Profile Picture Successfully
    [Documentation]    Test fetching edit MyMerchant successfully when user exists
    Create Session    editSession    ${BASE_URL}
    ${response}=    GET On Session    editSession    /    params=user=pansaar1553
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    id
    Should Contain    ${response_body}    name
    Should Contain    ${response_body}    description
    Should Contain    ${response_body}    price
    Should Contain    ${response_body}    image

Test Fetch Profile Picture with no parameter
    [Documentation]    Test fetching edit MyMerchant with no parameter
    Create Session    editSession    ${BASE_URL}
    ${response}=    GET Request    editSession    /    
    Should Be Equal As Strings    ${response.status_code}    400
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    Missing user parameter

Test Fetch Profile Picture User Not Found
    [Documentation]    Test fetching edit MyMerchant when user is not found
    Create Session    editSession    ${BASE_URL}
    ${response}=    Get Request    editSession    /    params=user=nonexistentuser
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found

    



