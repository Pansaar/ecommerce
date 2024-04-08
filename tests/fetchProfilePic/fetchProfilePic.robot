*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    String
Library    OperatingSystem

*** Variables ***
${BASE_URL}    http://localhost:3000/api/fetchProfilePic

*** Test Cases ***
Test Fetch Profile Picture Successfully
    [Documentation]    Test fetching profile picture successfully when user exists
    Create Session    profilePicSession    ${BASE_URL}
    ${response}=    GET On Session    profilePicSession    /    params=user=pansaar1553
    Should Be Equal As Strings    ${response.status_code}    200
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    message
    Should Contain    ${response_body}    profilePic
    Should Contain    ${response_body}    username

Test Fetch Profile Picture User Not Found
    [Documentation]    Test fetching profile picture when user is not found
    Create Session    profilePicSession    ${BASE_URL}
    ${response}=    Get Request    profilePicSession    /    params=user=nonexistentuser
    Should Be Equal As Strings    ${response.status_code}    404
    ${response_body}=    Convert To String    ${response.content}
    Should Contain    ${response_body}    User not found

    



