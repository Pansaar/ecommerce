*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Input and Add MyMerchant Product Data
    Open Browser    http://localhost:3000/myMerchant?user=pansaar1553    Chrome
    Sleep    3s
    ${file_path}=    Set Variable    C:\\Users\\lenovoW10\\Downloads\\poring1.png
    Choose File    id=uploadMyMerchant    ${file_path}
    Sleep    1s
    Click Element    id=inputProdName
    Input Text    id=inputProdName    test
    Click Element    id=inputSelectCategory
    Click Element    id=electronics
    Click Element    id=inputPrice
    Input Text    id=inputPrice    100
    Click Element    id=inputAmount
    Input Text    id=inputAmount    10
    Click Element    id=inputDescription
    Input Text    id=inputDescription    Tested with robot framework
    Press Keys    id=submit    ENTER
    Sleep    15s

    