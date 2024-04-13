*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Login Success
    [Documentation]    Test logging in success
    Open Browser    http://localhost:3000    Chrome
    Input Text    id=username    pansaar1553
    Input Text    id=password    zachpansaar1553
    Click Button    id=submit
    Sleep    10 seconds
    Location Should Be    http://localhost:3000/home?user=pansaar1553

Login Failed
     [Documentation]    Test logging in failed
    Open Browser    http://localhost:3000    Chrome
    Input Text    id=username    nonexistentUser
    Input Text    id=password    123456789
    Click Button    id=submit
    Sleep    10 seconds
    Page Should Contain    Invalid username or password. Please try again.

