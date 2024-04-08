*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchSellerId

*** Test Cases ***
Test Fetch Seller ID Successfully
    [Documentation]    Test fetching profile picture successfully when user exists
    Create Session    sellerIdSession    ${BASE_URL}
    ${response}=    GET On Session    sellerIdSession    /    params=user=pansaar1553
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    user

Test Fetch Seller ID Not Found
    [Documentation]    Test fetching profile picture when user is not found
    Create Session    sellerIdSession    ${BASE_URL}
    ${response}=    Get Request    sellerIdSession    /    params=user=nonexistentuser
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found





