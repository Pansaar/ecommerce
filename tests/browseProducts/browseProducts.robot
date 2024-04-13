*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Product Search Success
    Open Browser    http://localhost:3000/home?user=pansaar1553    Chrome
    Wait Until Element Is Visible    id=browseProducts
    Click Element    id=browseProducts
    Input Text    id=browseProducts    I
    Click Element    id=search
    Sleep    15s

Product Lazy Loading Success
    Open Browser    http://localhost:3000/home?user=pansaar1553    Chrome
    Wait Until Element Is Visible    id=prodContainer0    timeout=20s
    Click Element    id=moreProducts
    Sleep    10s

