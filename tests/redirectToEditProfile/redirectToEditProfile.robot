*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Redirect to Edit Profile Success
    [Documentation]    Test redirecting to edit profile success
    Open Browser    http://localhost:3000/profile?user=pansaar1553    Chrome
    Click Element    id=profilePic
    Sleep    5 seconds
    Page Should Contain    Change Profile Picture


