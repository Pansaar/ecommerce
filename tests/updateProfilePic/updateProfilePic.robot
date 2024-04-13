*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Change Profile Picture
    [Documentation]    Test changing profile picture via React component
    [Tags]    ui
    Open Browser    http://localhost:3000/editProfilePic?user=pansaar1553    Chrome
    Wait Until Element Is Visible    id=image    timeout=10s
    ${file_path}=    Set Variable    C:\\Users\\lenovoW10\\Downloads\\heatmap.jpg
    Choose File    id=choosePic    ${file_path}
    Click Button    id=submit

Delete Profile Picture
    [Documentation]    Test deleting profile picture via React component
    [Tags]    ui
    Open Browser    http://localhost:3000/editProfilePic?user=pansaar1553    Chrome
    Wait Until Element Is Visible    id=image    timeout=10s
    Click Button    id=delete


